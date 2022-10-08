import { styled } from '@mui/material/styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef } from 'react'
//import data from '../../../data'

const AdvertContainer = styled('div')(({theme}) => ({
 border: '1px solid #1313',
 borderRadius: '7px',
 padding: '20px',
 width: '100vw',
})) 
const AdvertDiv = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
})) 
const AdvertColOne = styled('div')(({theme}) => ({
   paddingLeft: '15px',
   display: 'flex',
   lineHeight: '20px',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   textAlign: 'left',
   alignItems: 'center',
   alignContent:'center',
   flex: 3
})) 
const AdvertColTwo = styled('div')(({theme}) => ({
  width: 'auto', 
   display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent:'center',
  flex: 2,
  'img': {
    width: '300px',
    height: '280px'
  }
})) 
const AdvertTitle = styled('h1')(({theme}) => ({
  fontSize: '3.5rem',
  fontWeight: 900,
  fontStyle: "oblique",
  flexShrink: 'inherit',
})) 
const AdvertDes = styled('h5')(({theme}) => ({
  flexShrink: 'inherit',
  fontSize: '19px',

  marginBottom: '11px',
  letterSpacing: '0.5px',
  fontWeight: 400,

})) 
const AdvertBtn = styled('buton')(({theme}) => ({
  marginTop: '21px',
  
 'button':{
  padding: '15px 12px 15px 12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '20px',
  fontWeight: 500,
  backgroundColor: '#ff0000',
  color: 'white',
  '&:hover': {
    border: '2px solid red',
    
     backgroundColor: 'transparent',
    color: '#ff0000'
  }
 }
})) 
const AdTect = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '80px',
})) 



const Advert = ({slider}) => {


  const sliderRef = useRef(null)
  const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      ref: sliderRef,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
  }; 

  return (
    <>
        <AdvertContainer>              
          <Slider {...settings}>
           {slider.map((item) => (
            <AdvertDiv key={item._id}>
               <AdTect>
                  <AdvertColOne>
                      <AdvertTitle>{item.title}?</AdvertTitle>
                      <AdvertDes>{item.desc}</AdvertDes>
                      <AdvertBtn><button>{item.btnText}</button></AdvertBtn>
                  </AdvertColOne>
                  <AdvertColTwo>
                    <img src={item.image} alt={item.title} />
                  </AdvertColTwo>
               </AdTect>
            </AdvertDiv>
           ))}
          </Slider>
        </AdvertContainer>
    </>
  )
}

export default Advert