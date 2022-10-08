import { StarOutlined } from '@mui/icons-material'
import React from 'react'
import '../App.css'

const Star = (props) => {
  return (
    <>
        <div className="star">
          <span><StarOutlined className={props.step1 ? "active" : ''} /></span>
          <span><StarOutlined className={props.step2 ? "active" : ''} /></span>
          <span><StarOutlined className={props.step3 ? "active" : ''} /></span>
          <span><StarOutlined className={props.step4 ? "active" : ''} /></span>
          <span><StarOutlined className={props.step5 ? "active" : ''} /></span>
      </div> 
    </>
  )
}

export default Star