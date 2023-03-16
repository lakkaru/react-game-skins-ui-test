import React from 'react'

export default function ChatInfo({image}) {
  return (
    <div style={{border:'1px solid #333', borderRadius:'5px',padding:'0px 6px'}}>
        <img
          src={image}
          alt=""
          height={"10px"}
        />
    </div>
  )
}
