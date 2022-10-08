import { styled } from "@mui/material/styles";



export const CategoryContainer = styled('div')(({theme}) => ({
    margin: '6px',
    width: '300px',
    height: 'auto',
    flexDirection: 'row',
    '&:hover': {
        transform: 'scale(1.04)'
    }
}))
export const CategoryCol = styled('div')(({theme}) => ({
    padding: '3px',
    border: '1px solid #1313',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3]
}))
export const CategoryHeader = styled('div')(({theme}) => ({
    display: 'flex',
    'a': {
        color: '#3e2723',
    },
    justifyContent: 'flex-end',
}))
export const CatImage = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    'img': {
        width: '284px',
        height: '180px',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }
}))
export const CatBody = styled('div')(({theme}) => ({
    flexDirection: 'column',
}))
export const Catspan = styled('span')(({theme}) => ({
    color: '#00e676',
    padding: '8px',
    margin: '7px',
    borderRadius: '50px',
    backgroundColor: '#c8e6c9',
    letterSpacing: '0px',
    fontSize: '15px',
    fontWeight: 700,
}))
export const CatTitle = styled('h5')(({theme}) => ({
    fontSize: '20px',
    letterSpacing: '0px',
    lineHeight: '0px',
}))
export const CatDesc = styled('span')(({theme}) => ({
    fontSize: '17px',
    fontWeight: 500,

    lineHeight: '0px',
    letterSpacing: '0px',
}))
export const CatStar = styled('div')(({theme}) => ({
    marginTop: '5px',
    marginBottom: '5px',
    borderBottom: '1px solid #1313'
}))
export const CatText = styled('span')(({theme}) => ({
    display: 'flex',
  lineHeight: '6px',
  alignItems: "center",
  'p':{
      marginLeft: '5px',
      
       
  },
  borderBottom: '1px solid #1313'
}))
export const CatFooter = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%'
}))
export const CatFooterHead = styled('div')(({theme}) => ({
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
export const CatBottom = styled('div')(({theme}) => ({
    display: 'flex',
  marginTop: '5px',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: ' 6px',
  'a': {
      textDecoration: 'none',
      fontSize: '22px',
      fontWeight: 400,
      textAlign: 'center',
      border: '1px solid #3e2723',
      padding: '5px 80px 5px 80px',
      borderRadius: theme.spacing(1),
      color: '#3e2723',
      '&:hover': {
         backgroundColor: '#3e2723',
         color: 'white'
       }
    },
}))

/******************
 * CATEGORY SHOP
 ***********************/

export const CategoryShopContainer = styled('div')(({theme}) => ({
 display: 'flex',
 Width: '100vw',
 height: '130vh',
 overflow: 'hidden',
 justifyContent: 'center',
}))
export const CategoryShopRow = styled('div')(({theme}) => ({
 width: '100vw',
 justifyContent: 'center',
 flexDirection: 'row',
}))
export const CatgoryShopColOne = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

}))
export const CategoryColHeader = styled('h1')(({theme}) => ({
 letterSpacing: '1.5px',
 Width: '100%',
 color: '#3e2723',
 textAlign: 'center',
 justifyContent: 'center',
 fontStyle: 'italic',
 fontSize: '50px',
 margin: '10px',
 fontWeight: 600,
}))
export const CategoryColBody = styled('div')(({theme}) => ({
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '17px',
    display: 'flex',
    height: '60vh',
    flex: 1,  
    overflowY: 'scroll',  
    'button': {
         
    }
}))
export const CategoryShopBtn = styled('div')(({theme}) => ({
    background: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    'div': {
    display: 'flex',
    flexDirection: 'column',
    },
    'span': {
        padding: '10px',
        background: 'inherit',
        border: 'none',
        cursor: 'pointer',
        fontSize: '19px',
        '&:hover': {
           backgroundColor: '#d7ccc8'
        }
    }
}))
export const CategoryShopBtnmini = styled('button')(({theme}) => ({
    margin: '4px',
    padding : '20px',
    background: 'inherit',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    fontSize: '21px',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    fontFamily: 'monospace',
    fontWeight: 400,
    '&:hover': {
        backgroundColor: '#bbdefb',
    }
}))
export const CatgoryShopColTwo = styled('div')(({theme}) => ({
    display: 'flex',
    margin: '15px',
    marginLeft: '27px',
    'a': {
        fontSize: '20px',
        textDecoration: 'none',
        color: '#3e2723',
        letterSpacing: '1px',
        fontStyle: "italic",
        fontWeight: 400,
        '&:hover':{
            textDecoration: 'underline',
            color: 'none'
        }
    },
    'span': {
        fontSize: '25px',
        marginLeft: '7px',
        marginRight: '7px',
    },
   
}))
export const CatgoryShopColThree = styled('nav')(({theme}) => ({
    justifyContent: 'center',
    display: 'flex',
    flex: 4,
}))
export const CategoryColInner = styled('div')(({theme}) => ({
    justifyContent: 'center',
    flex: 5,
    postion: 'fixed',
}))
export const CategoryShopProductContainer = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
}))
export const CategoryPagination = styled('div')(({theme}) => ({}))
