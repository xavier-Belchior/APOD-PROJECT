import React from 'react'

export default function SideBar(props) {
  const {handleToggle, data}=props
  return (
    <div className='sidebar' onClick={handleToggle}>
      <div className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
      <div className='descriptionContainer'>
        <p className='descriptionTitle'>{data?.date}</p>
        <p>{data?.explanation}</p>
      </div>
      <button onClick={handleToggle}>
      <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
      
    </div>
  )
}
