import { styled } from "@mui/material"


export const CartContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
}))
export const CartRow = styled('div')(({theme}) => ({
 width: 'auto',
    height: '100%',
    margin: '40px',
    justifyContent: 'center',
    alignItems:'center',
    boxSizing: 'border-box',
}))
export const CartHead = styled('h1')(({theme}) => ({
 fontSize: '50px',
 marginTop: '25px',
 marginLeft: '25px',
 fontStyle: 'italic',
 fontWeight: 800,
}))
export const CartBack = styled('div')(({theme}) => ({
    justifyContent: 'flex-end',
    width: 'auto',
    height: 'auto',
    padding: '12px',
    lineHeight: '0px',
    border: '3px solid #1313',
    borderRadius: '5px',
    objectFit: 'contain',
    'a': {
        justifyContent: 'flex-end',
        fontSize: '20px',
        textDecoration: 'none',
        color: 'black',
        textAlign: 'right',
    },
    'svg': {
        fontSize: '20px'
    }
}))
export const CartCol = styled('div')(({theme}) => ({
 display: 'flex',
 flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
}))
export const CartColHead = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
   borderBottom: '2px solid #1313',
   flex:1,
  justifyContent: 'space-around',
  'span': {
      fontSize: '18px',
      letterSpacing: '0px',
  }
}))
export const CartItem = styled('div')(({theme}) => ({
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(3),
   boxShadow: theme.shadows[3],
    justifyItems: 'center',
    border: '2px solid #1313',
    justifyContent: 'space-around',
    '&:hover': {
        backgroundColor: '#fafafa',
    },
   [theme.breakpoints.down('tablet')] : {
       flexWrap: 'wrap'
   }
}))
export const CartCardOne = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyItems: 'center',
    textAlign: 'center',
    
}))
export const CartCardTwo = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-around',
    'a':{
        textDecoration: 'none',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        flex: 1,
        display: 'flex',
        flexDirection:'row',
    },
    
}))
export const CartDetails = styled('div')(({theme}) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    justifyItems: 'center',
}))
export const CardImage = styled('div')(({theme}) => ({
  cursor: 'pointer',
    'img': {
        width: '147px',
        height: '130px',
      
        borderRadius: theme.spacing(1.5),
        boxShadow: theme.shadows[3],
        '&:hover': {
            transform: 'scale(1.04)'
        }
    }
}))
export const CardAbout = styled('div')(({theme}) => ({
    alignItems: 'center', 
    margin: '16px',
    textAlign: 'left',
    flexDirection: 'column',
     cursor: 'default'
}))
export const CardName = styled('span')(({theme}) => ({
    lineHeight: '8px',
    fontSize: '25px',
    fontWeight: 700,
    [theme.breakpoints.down('tablet')] : {
        flexShrink: 2,
        letterSpacing: '0px',
        fontSize: '12px',
        flexWrap: 'wrap'
    },
    [theme.breakpoints.down('laptop')] : {
        flexShrink: 2,
        fontSize: '19px',
        letterSpacing: '0px',
        flexWrap: 'wrap'
    }
}))
export const CardDesc = styled('span')(({theme}) => ({
    fontWeight: 300,
}))
export const CardPrice = styled('span')(({theme}) => ({
    fontSize : '20px',
    fontWeight: 400,
}))
export const CardQuantity = styled('div')(({theme}) => ({
    'button': {
        background: 'transparent',
        border:'2px solid #1313',
        padding: '6px',
        margin: '6px',
        cursor: 'pointer',
        borderRadius: '4px',

    }
}))
export const CardTotal = styled('div')(({theme}) => ({
        fontSize : '20px',
        fontWeight: 400,
}))




export const CartColTwo = styled('div')(({theme}) => ({
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    justifyItems: 'center',
    position: 'absolute',
    boxSizing: 'border-box',
}))
export const CartBottom = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: theme.spacing(3),
    boxShadow: theme.shadows[2],
    margin: '28px',
    marginRight: '84px',
    justifyContent: 'space-between',
    border: '1px solid #1313',
    [theme.breakpoints.down('tablet')] :{
       flexDirection: 'column',
       justifyContent: 'center',
       textAlign: 'left',
    }
}))
export const CartBottomOne = styled('div')(({theme}) => ({
  diplay: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '30px',
  alignContent: 'center',
}))
export const BottomOneHead = styled('h2')(({theme}) => ({
    margin: '20px',
    letterSpacing:"0px",
    fontStyle: 'italic',
}))
export const BottomOneBody = styled('div')(({theme}) => ({}))
export const One = styled('div')(({theme}) => ({
    fontSize: '17px',
    fontWeight: 400,
}))
export const Two = styled('div')(({theme}) => ({
    fontSize: '17px',
    fontWeight: 400,
}))
export const CartBottomTwo = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '30px',
    [theme.breakpoints.down('tablet')] :{
        textAlign: 'left',
    } 
}))
export const SecondOne = styled('div')(({theme}) => ({
    borderBottom: '1px solid #1313',
    margin: '10px',
    fontWeight: 100,
    justifyContent: 'space-between',
    fontSize: '18px',
    'span': {
        marginRight: '40px'
    },
    [theme.breakpoints.down('tablet')] :{
        margin: 'auto'
    }
}))
export const SecondTwo = styled('div')(({theme}) => ({
    borderBottom: '1px solid #1313',
    margin: '10px',
    fontWeight: 100,
    display: 'flex',
    fontSize: '18px',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    'span': {
        marginRight: '70px'
    },
    [theme.breakpoints.down('tablet')] :{
        margin: 'auto',
        justifyContent: 'center',
        textAlign: 'left',
    } 

}))
export const SecondThree = styled('div')(({theme}) => ({
    borderBottom: '1px solid #1313',
    margin: '10px',
    fontWeight: 100,
    fontSize: '18px',
    justifyContent: 'space-between',
    'span': {
        marginRight: '50px'
    },
    [theme.breakpoints.down('tablet')] :{
        margin: 'auto'
    }

}))
export const CartButton = styled('button')(({theme}) => ({
    padding: '16px 13px 16px 13px',
    backgroundColor: '#ff0000',
    border: 'none',
    transition: 'all 1s ease-in-out',
    borderRadius: theme.spacing(2),
    'a': {
        fontSize: '20px',
        fontWeight: 500,
        color: 'white',
        textDecoration: 'none',
    },
    '&:hover': {
        backgroundColor: '#880e4f',
    }

}))
