import React from 'react'

export default function Skin({image, unColor}) {
  return (
    <div>
        <img src={image} alt='' height={'40px'}/>
        <div style={{border:`2px solid ${unColor}`, width:'50%', position:'relative', left:'20px',maxWidth:'25px'}}></div>
    </div>
  )
}
