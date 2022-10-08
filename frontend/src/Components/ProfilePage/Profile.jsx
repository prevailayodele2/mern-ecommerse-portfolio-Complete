import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/UserSlice';
import {Email, LogOut, Phone, ProfileContainer, ProfileDetails, ProfileImage, Username} from  './ProfileModule'

const Profile = () => {
    const [style, setStyle] = useState('showprofile')
   const dispatch = useDispatch()
  const  user  = useSelector((state) => state.user.currentUser);

  const logoutHandle = () => {
      dispatch(logout())
  }
  return (
    <>
      <ProfileContainer className={style}>
         <span onClick={()=> (setStyle('hideprofile'))} style={{fontSize: '25px',cursor: 'pointer',margin: '10px'}}><b>x</b></span>
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column'
          }}>
            <ProfileImage>
              <img src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImg" />
            </ProfileImage>
            <ProfileDetails>
                <Username>Username:  <span>{user.username}</span></Username>
                <Email>Email:  <span>{user.email}</span></Email>
                <Phone>Phone Number: <span>{user.phone}</span></Phone>
            </ProfileDetails> 
            <div style={{marginTop: '25px', cursor: 'pointer'}}>
                Rate Your Experience using our Website <b style={{fontSize: '22px', marginLeft: '12px'}}>{`>`}</b>
            </div>
            <LogOut><button onClick={logoutHandle}>Logout</button></LogOut>
         </div>
      </ProfileContainer>
    </>
  )
}

export default Profile
