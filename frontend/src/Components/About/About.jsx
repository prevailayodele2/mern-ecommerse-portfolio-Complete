import { HeadsetMic, LocalShipping, Payment, ShoppingCart } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import React from 'react'

const AboutContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#e3fcfd',
}))
const AboutRow = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px',
    flexDirection: 'row',
    gap: '10px',
    height: '80vh',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')] : {
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 'auto'
    }
}))
const AboutColOne = styled('div')(({theme}) => ({
    width: '400px',
    backgroundColor: 'white',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
}))
const AboutColContainer = styled('div')(({theme}) => ({
    padding: '20px',
    alignItems: 'center',
}))
const HeaderIcon = styled('div')(({theme}) => ({
  'svg': {
    fontSize: '35px',
    padding: '20px',
    backgroundColor: '#e3fcfd',
    borderRadius: '50px',
  }
}))
const Title = styled('h2')(({theme}) => ({
    fontWeight: 600,
    fontSize: '25px',
}))
const Desc = styled('span')(({theme}) => ({
    flexShrink: 1,
    fontWeight: 100,
    fontSize: '17px',
}))

const About = () => {
  return (
    <>
         <AboutContainer>
             <AboutRow>
                 <AboutColOne>
                     <AboutColContainer>
                        <HeaderIcon><LocalShipping /> </HeaderIcon>
                        <Title>Worldwide Delivery</Title>
                        <Desc> We offer competitive prices on our 100 million plus product and range</Desc>
                     </AboutColContainer>
                 </AboutColOne>
                 <AboutColOne>
                    <AboutColContainer>
                            <HeaderIcon><Payment /> </HeaderIcon>
                            <Title>Safe Payment</Title>
                            <Desc>We offer competitive prices on our 100 million plus product and range</Desc>
                        </AboutColContainer>
                    </AboutColOne>
                 <AboutColOne>
                    <AboutColContainer>
                            <HeaderIcon><ShoppingCart /> </HeaderIcon>
                            <Title>Shop With Confidence</Title>
                            <Desc>We offer competitive prices on our 100 million plus product and range</Desc>
                        </AboutColContainer>
                    </AboutColOne>
                 <AboutColOne>
                    <AboutColContainer>
                            <HeaderIcon><HeadsetMic /> </HeaderIcon>
                            <Title>24/7 Support</Title>
                            <Desc>We offer competitive prices on our 100 million plus product and range</Desc>
                        </AboutColContainer>
                    </AboutColOne>
                </AboutRow>
         </AboutContainer>
    </>
  )
}

export default About