import React from 'react'
import { Link } from 'react-router-dom'
import  { data } from '../../data'

import {
    CategorySliderContainer,CategoryCol,
    CategoryItem,CategoryIcon,CategoryText
} from './ItemSliderModule'


const ItemSlider = () => {

  return (
    <>
        <CategorySliderContainer>
            <CategoryCol>
                    {data.itemsliderCategory.map((item) => (
                        <CategoryItem  key={item._id}>
                          <Link to={item.link}>
                               <CategoryIcon>{item.icon}</CategoryIcon>
                                <CategoryText>{item.title}</CategoryText>
                            </Link>
                        </CategoryItem>
                    ))}
            </CategoryCol>
        </CategorySliderContainer>
    </>
  )
}

export default ItemSlider