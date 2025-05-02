import React from 'react'

export default function (props) {
  const {showModal, handleToggle, data}= props
  return (
    <footer>
      <div className='bgGradient'></div>
      <h1>APOD PROJECT</h1>
      <h2>{data?.title}</h2>
      <button onClick={handleToggle}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}
