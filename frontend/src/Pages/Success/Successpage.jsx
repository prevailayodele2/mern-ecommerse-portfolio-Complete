import React from 'react'
import { useLocation } from 'react-router-dom'

const Successpage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      successful
    </div>
  )
}

export default Successpage
