import React from 'react'

export default function BalanceButton({name, icon, value}) {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent:'space-evenly',
        alignItems: "center",
        backgroundColor: "#201938",
        borderRadius: "15px",
        padding: "0px 10px 0px 10px",
        minHeight:'50px'
      }}
    >
      <img
        src={icon}
        alt=""
        height={"20px"}
      />
      <div style={{paddingLeft:'10px', textAlign:'left'}}>
        <p style={{ color: "#aaa" }}>{name}</p>
        <p>{value}</p>
      </div>
    </div>
  )
}

