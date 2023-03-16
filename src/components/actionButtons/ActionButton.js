import React from 'react'

export default function ActionButton({btnName, btnFill}) {
  return (
    <div style={{backgroundColor:btnFill ,borderRadius:'15px', padding:'10px 20px'}}>{btnName}</div>
  )
}
