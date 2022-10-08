import { styled } from "@mui/material/styles";



export const CategorySliderContainer = styled('div')(({theme}) => ({
    border: '1px solid #1313',
    borderRadius: '7px',
    height: 'auto',
    width: 'auto',
    margin: '6px',
}))
export const CategoryCol = styled('ul')(({theme}) => ({
 display: 'flex',
 flexDirection: 'column',
 lineHeight: '0px',
}))
export const CategoryItem = styled('li')(({theme}) => ({
   display: 'flex',
   margin: '0px',
   padding: '12px',
   '&:hover': {
      backgroundColor: '#bbdefb'
   },
   'a': {
     display: 'flex',
      flexDirection: 'row',
     textDecoration: 'none',
     color: 'black',
    
   },
}))
export const CategoryIcon = styled('span')(({theme}) => ({
  marginRight: '6px'
}))
export const CategoryText = styled('p')(({theme}) => ({
  fontSize: '22px',
  fontWeight: 400,
  marginLeft: '5px',
  [theme.breakpoints.down('laptop')] : {
    display: 'none',
   }
}))