import { styled } from "@mui/material";


export const SignUpContainer = styled('div')(({theme})=> ({
    width: '100%',
    height:'100%',
    top: 0,
    margin: 0,
    'img': {
    objectFit: 'cover',
    background :'no-repeat center fixed',
    backgroundPosition : 'center',
    position: 'relative',
    backgroundSize: 'cover',
    width: '100%',
    height: '150vh',
    
    }
}))
export const SignUpRow = styled('div')(({theme})=> ({
    position: 'absolute',
    justifyContent: 'flex-end',
    padding: '30px',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    top: '80px',
    backgroundColor: 'white',
    right: '80px',
    alignItems: 'center',
}))
export const SignUpCol = styled('div')(({theme})=> ({
    alignItems: 'center',
}))
export const SignUpHeader = styled('div')(( {theme})=> ({
    'a': {
        textDecoration: 'none',
        color: 'black'
    }
}))
export const SignUpTitle = styled('h1')(({theme})=> ({}))
export const SignupInput = styled('div')(({theme})=> ({
  
}))
export const SignupinputCont = styled('div')(({theme})=> ({
   display: 'flex',
   flexDirection: 'column',
   border: "1px solid #1313",
   borderRadius: '8px',
   textAlign: 'left',
    'input': {
        border: 'none',
        width: '350px',
        height: '35px',
    },
    'label': {
        fontWeight: 600,
    }
}))
export const SignupLowerLevel = styled('div')(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
}))
export const ForgetPassword = styled('div')(({theme})=> ({
    'a':{
        textDecoration: 'none',
        fontWeight: 400,
        letterSpacing: '0px',
    }
}))
export const SignUpButton = styled('button')(({theme})=> ({
displa: 'flex',
justifyContent: 'center',
margin: '10px',
cursor: 'pointer',
border: 'none',
padding: '12px 34px',
marginLeft: '98px', 
borderRadius: '15px',
backgroundColor: 'darkblue',
textAlign: 'center',
'a': {
    textDecoration: 'none',
    fontWeight: 400,
textAlign: 'center',
color: 'white',
}
}))
export const SignUpRedirect = styled('div')(({theme})=> ({
    textAlign: 'left',
    fontWeight: 400,
    margin: '5px',
    marginLeft: '43px',
    'a': {
        marginLeft: '5px',
        fontWeight: 700,
        color: 'darkblue',
        fontSize: '18px',
    }
}))


export const SignUpcolTwo = styled('div')(({theme})=> ({

}))
export const Social = styled('div')(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid #1313',
    borderRadius: '27px',
    margin: '6px',
    padding: '13px 21px',
    'span': {
        fontSize: '18px',
        color: '#131313',
        marginTop: '5px',
        fontWeight: 600,
        cursor: 'pointer',
    },
    'img':{
        width: '40px',
        marginRight: '20px',
        textAlign: 'left',
        left: 0,
        height: '40px',
        cursor: 'pointer',
    }
}))