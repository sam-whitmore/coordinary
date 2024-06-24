import React from 'react'
import '../styles/Spinner.scss'

const Spinner: React.FC = () => {
  return (
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  )
}

export default Spinner
