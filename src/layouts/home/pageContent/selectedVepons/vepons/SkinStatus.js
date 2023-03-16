import React from 'react'

export default function SkinStatus({status}) {
  return (
    <div style={{border:`1px solid ${status.skinStatusColor}`, borderRadius:'10px', padding:'2px'}}>
        <p>{status.skinStatus}</p>
    </div>
  )
}
