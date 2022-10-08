import { styled } from "@mui/material/styles";
import { letterSpacing } from "@mui/system";


export const ProfileContainer = styled('div')(({theme})=> ({
    width: '30%',
    height: '80vh',
    position: 'fixed',
    top: 80,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: theme.spacing(2.4),
    boxShadow: theme.shadows[4], 
    zIndex: 10,
    backgroundColor: '#0000001e',
}))

export const ProfileImage = styled('div')(({theme})=> ({
    justifyContent: 'center',
    img: {
        width: '200px',
        height: '180px',
        borderRadius: '50%',
        objectFit: 'cover',
    }
}))
export const ProfileDetails = styled('div')(({theme})=> ({
    gap: '25px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
}))
export const Username = styled('div')(({theme})=> ({
    display: 'flex',
    span: {
        textAlign: 'right',
        fontSize: '20px',
        fontWeight: 'bold', 
    },
    gap: '80px',
}))
export const Email = styled('div')(({theme})=> ({
    display: 'flex',
    gap: '70px',
    span: {
        fontSize: '20px',
        fontWeight: 'bold', 
        textAlign: 'right',
    },
}))
export const Phone = styled('div')(({theme})=> ({
    display: 'flex',
    gap: '70px',
    span: {
        fontSize: '20px',
        fontWeight: 'bold', 
        textAlign: 'right',
    },
}))
export const LogOut = styled('div')(({theme})=> ({
    marginTop: '67px',
    marginLeft: '80px',
   button: {
    borderRadius: theme.spacing(1.5),
   padding: '15px 10px 15px 10px',
   border: 'none',
   cursor:'pointer',
   backgroundColor: '#ff0000',
   color: 'white',
   fontSize: '19px',
   letterSpacing: '0px',
   '&:hover': {
       boxShadow: theme.shadows[4]
   }
   }
}))