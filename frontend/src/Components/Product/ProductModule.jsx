import { styled } from "@mui/material/styles";


export const ProductContainer = styled('div')(({theme}) => ({
  margin: '6px',
   flexDirection: 'row',
   '&:hover': {
       transform: 'scale(1.04)'
   }
}))
export const ProductRow = styled('div')(({theme}) => ({

 padding: '3px',
 border: '1px solid #1313',
 borderRadius: theme.spacing(2),
 boxShadow: theme.shadows[3]
}))
export const ProductHeader = styled('span')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
}))
export const ProductImage = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    'img': {
        width: '279px',
        height: '180px',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }
}))
export const ProductBody = styled('div')(({theme}) => ({
    flexDirection: 'column',
}))
export const ProductSpan = styled('span')(({theme}) => ({
    color: '#00e676',
    padding: '8px',
    margin: '7px',
    borderRadius: '50px',
    backgroundColor: '#c8e6c9',
    letterSpacing: '0px',
    fontSize: '15px',
    fontWeight: 700,
}))
export const ProductTitle = styled('h5')(({theme}) => ({
   fontSize: '20px',
   letterSpacing: '0px',
   lineHeight: '0px',

}))
export const ProductDesc = styled('span')(({theme}) => ({
    fontSize: '17px',
    fontWeight: 500,

    lineHeight: '0px',
    letterSpacing: '0px',
}))
export const ProductStar = styled('div')(({theme}) => ({
    marginTop: '5px',
    marginBottom: '5px',
    borderBottom: '1px solid #1313'
}))
export const Ptext = styled('span')(({theme}) => ({
  display: 'flex',
  lineHeight: '6px',
  alignItems: "center",
  'p':{
      marginLeft: '5px',
      
       
  },
  borderBottom: '1px solid #1313'
}))
export const ProductFooter = styled('div')(({theme}) => ({
 width: '100%',
 height: '100%'
}))
export const ProductFooterHead= styled('div')(({theme}) => ({
    'img': {
        width: '50px',
        borderRadius: '50px',
        height: '40px'
    },
    'span': {
        alignItems: 'center',
        marginLeft: '10px',
        marginTop: '10px',
        lineHeight: '4px',
        'span':{
          fontSize:'17px',
          fontWeight: 400,
          color: '#616161',
          textTransform: 'lowwercase',
        },
        'h2':{
            fontSize: '17px',
            marginLeft: '10px'
        }
    },
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
}))
export const ProductBottom = styled('button')(({theme}) => ({
  display: 'flex',
  marginTop: '5px',
  marginLeft: '28px',
  margin: '5px',
  justifyContent: 'center',
  textDecoration: 'none',
    fontSize: '22px',
    fontWeight: 400,
    textAlign: 'center',
    border: '1px solid navy',
    padding: '5px 80px 5px 80px',
    borderRadius: theme.spacing(1),
    color: 'navy',
    '&:hover': {
       backgroundColor: 'navy',
       color: 'white'
     }

}))


export const ProductNavButton = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '50px',
  alignItems: 'flex-end',
}))
export const Left = styled('button')(({theme}) => ({
   borderRadius: theme.spacing(1.5),
   margin: '3px',
   background: 'transparent',
   padding: '10px',
   '&:hover': {
       transform: 'scale(1.03)'
   }
}))
export const Right = styled('button')(({theme}) => ({
    borderRadius: theme.spacing(1.5),
    margin: '3px',
    background: 'transparent',
    padding: '10px',
    '&:hover': {
        transform: 'scale(1.03)'
    }
}))




export const ProductHomeContainer = styled('div')(({theme}) => ({
    width: '100%',
    padding: '15px',
    margin: '10px',
    overflow: "hidden",
    
    height: '100vh',
    'h2': {
        fontStyle: 'italic',
        fontSize: '38px',
        fontWeight: 700,
        margin: '15px',
        color: '#3e2723'
    }
}))
export const ProductHomeCol = styled('div')(({theme}) => ({
    display: "flex",
    width: '300px'
}))


