import { Diamond } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import React from 'react'
import  { Google, Apple } from '@mui/icons-material'
import { footer } from '../../data'

const FooterContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
}))
const FooterDiv = styled('div')(({theme}) => ({
  display: 'flex',
  width: 'auto',
  height: '100%',
  gap: '13px',
  margin: '60px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down('tablet')] : {
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'auto'
}
}))
const FooterColOne = styled('div')(({theme}) => ({
    width: '360px',

}))
const FooterColThree = styled('div')(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'center',
}))
const FooterColTwo = styled('div')(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'center',
}))
const FooterColFour = styled('div')(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'center',
     width: '300px',
}))
const ColHeader = styled('div')(({theme}) => ({}))
const ColBody = styled('div')(({theme}) => ({
    flexShrink: 1,
    marginTop: '12px',
    marginBottom: '12px',
    fontSize: '20px',
}))
const ColFooter = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    
}))
const One = styled('button')(({theme}) => ({
    padding: '11px',
    borderRadius: theme.spacing(2),
    fontSize: '20px',
    background: 'inherit',
    margin: '10px',
    '&:hover': {
        backgroundColor: 'whitesmoke',
        transform: 'scale(1.03)'
    }
}))
const ColTwoHead = styled('h1')(({theme}) => ({
    fontSize: '30px',
    fontWeight: 700,
}))
const ColTwoList = styled('a')(({theme}) => ({
    flexDirection: 'column',
    fontSize: '20px',
    cursor: 'pointer',
    lineHeight: '32px',
    display: 'flex'
}))
const ColThreeList = styled('a')(({theme}) => ({
    flexDirection: 'column',
    margin: '10px',
    fontSize: '19px',
    display: 'flex'
}))

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterDiv>
                <FooterColOne>
                    <ColHeader>
                      <Diamond sx={{fontSize: '40px'}} />
                    </ColHeader>
                    <ColBody>Lorem, ipsum dolor sit 
                    amet consectetur adipisicing elit. 
                    Rem repudiandae libero nihil quaerat incidunt. 
                    Deleniti, placeat ipsam. Voluptatem, reprehenderit 
                    perspiciatis! Eius nisi nihil aperiam ea veritatis sit quos optio autem.</ColBody>
                    <ColFooter>
                       <One><Google />Google Play</One>
                       <One><Apple />App Store</One>
                    </ColFooter>
                </FooterColOne>
                 
                    <FooterColTwo>
                    <ColTwoHead>About Us</ColTwoHead>
                      {footer.about.map((item) => (
                        <>
                            <ColTwoList key={item.id} to={item.link}>{item.title}</ColTwoList>
                        </>
                      ))}
                    </FooterColTwo>
                    <FooterColThree>
                    <ColTwoHead>Customer Care</ColTwoHead>
                      {footer.customer.map((item) => (
                            <>
                                <ColTwoList key={item.id} to={item.link}>{item.title}</ColTwoList>
                            </>
                        ))}
                    </FooterColThree>
                    <FooterColFour>
                        {footer.Contact.map((item) => (
                            <>
                                <ColTwoHead>Contact</ColTwoHead>
                                <ColThreeList key={item.id}>{item.address}</ColThreeList>
                                <ColThreeList>Email: {item.email}</ColThreeList>
                                <ColThreeList>Phone: {item.phone}</ColThreeList>
                            </>
                        ))}
                    </FooterColFour>
            </FooterDiv>
        </FooterContainer>
    </>
  )
}

export default Footer