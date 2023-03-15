import React from 'react'

export default function SelectAll() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
       
      <input type='checkbox' name='sel'style={{fillColor:'lightblue'}}/>
      <label >Select All</label>
    </div>
  )
}
