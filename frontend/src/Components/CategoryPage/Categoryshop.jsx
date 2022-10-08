import React, { useEffect, useReducer, useState } from 'react';
//import { data } from '../../data'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Category from './Category';
import { Link } from 'react-router-dom';
import {
  CategoryShopContainer,
  CategoryShopRow,
  CatgoryShopColOne,
  CategoryColHeader,
  CategoryColBody,
  CategoryShopBtn,
  CatgoryShopColTwo,
  CategoryColInner,
  CatgoryShopColThree,
  CategoryShopProductContainer,
  CategoryPagination,
  CategoryShopBtnmini,
} from './CategoryModule';
import logger from 'use-reducer-logger';
import { ArrowDownward, ArrowRightAlt } from '@mui/icons-material';
import Loading from '../Loading/Loading';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const Categoryshop = () => {
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: '',
  });

  const [pageNumber, setPageNumber] = useState(0);

  const [category, setCategory] = useState([]);
  const productPerPage = 3;
  const pagesVisited = pageNumber * productPerPage;
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('http://localhost:5000/api/products/');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();
  }, []);
  const [data, setData] = useState(product);
  const [show, setShow] = useState(false);
  const displayedProducts = data
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((item) => <Category item={item} key={item._id} />);

  const pageCount = Math.ceil(data.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const filteredResult = (catItem) => {
    const result = product.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };
  const filteredbrand = (brandItem) => {
    const result = product.filter((curDate) => {
      return curDate.brand === brandItem;
    });
    setData(result);
  };
  useEffect(() => {
    const fetctData = async () => {
      const result = await axios.get('http://localhost:5000/api/category');
      setCategory(result.data);
    };
    fetctData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <CategoryShopContainer>
          <CategoryShopRow>
            <CategoryColHeader>Categories</CategoryColHeader>
            <CatgoryShopColOne>
              <CatgoryShopColTwo>
                <Link to="/">Home</Link>
                <span>{`>`}</span>
                <Link to="/category">Category</Link>
              </CatgoryShopColTwo>
            </CatgoryShopColOne>
            <h2>
              Filter By:{' '}
              {show ? (
                <span>
                  {' '}
                  <ArrowDownward
                    sx={{ cursor: 'pointer', marginLeft: '7px' }}
                    onClick={() => setShow((noshow) => !noshow)}
                  />{' '}
                </span>
              ) : (
                <ArrowRightAlt
                  sx={{ cursor: 'pointer', marginLeft: '7px' }}
                  onClick={() => setShow((noshow) => !noshow)}
                />
              )}
            </h2>
            <CatgoryShopColThree>
              <CategoryColBody>
                {category.map((item) => (
                  <CategoryShopBtn>
                    <CategoryShopBtnmini
                      onClick={() => filteredResult(item.title)}
                    >
                      {item.title}
                    </CategoryShopBtnmini>
                    {show ? (
                      <div>
                        {item.brand.map((i) => (
                          <span onClick={() => filteredbrand(i.a)}>{i.a}</span>
                        ))}
                      </div>
                    ) : (
                      ''
                    )}
                  </CategoryShopBtn>
                ))}
              </CategoryColBody>

              <CategoryColInner>
                <CategoryShopProductContainer>
                  {loading ? (
                    <img
                      src="/images/spinner1.gif"
                      alt="/"
                      style={{ justifyContent: 'center', width: '200px' }}
                    />
                  ) : error ? (
                    <h1>{error}</h1>
                  ) : (
                    <>{ displayedProducts }</>
                  )}
                </CategoryShopProductContainer>
                <CategoryPagination>
                  <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                  />
                </CategoryPagination>
              </CategoryColInner>
            </CatgoryShopColThree>
          </CategoryShopRow>
        </CategoryShopContainer>
      )}
    </>
  );
};

export default Categoryshop;
