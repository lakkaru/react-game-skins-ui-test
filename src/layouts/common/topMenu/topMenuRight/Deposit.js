import React from 'react'

export default function Deposit() {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent:'space-evenly',
        alignItems: "center",
        backgroundColor: "#201938",
        borderRadius: "15px",
        padding: "0px 0px 0px 10px",
        fontWeight:'bold'
      }}
    >
      <p style={{marginRight:'5px',color:'black', padding:'5px', backgroundColor:'white', borderRadius:'50%'}}>$</p>
      <p style={{marginRight:'15px', }}>50,000</p>
      <button style={{backgroundColor:'#fd7b87', padding:'10px', borderRadius:'10px', fontWeight:'bold'}}> Deposit</button>
    </div>
  )
}
