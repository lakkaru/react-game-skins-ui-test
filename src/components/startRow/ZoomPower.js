import React from "react";

export default function ZoomPower() {
  return (
    <div
      style={{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: "#1f1b36",
        borderRadius: "15px",
        padding: "5px",
      }}
    >
      <p>0</p>
      <div style={{display:'flex', gap:'3px'}}>
        <p style={{padding:'8px', backgroundColor:'#261e3e', borderRadius:'10px'}}>1.1x</p>
        <p style={{padding:'8px', backgroundColor:'#261e3e', borderRadius:'10px'}}>1.5x</p>
        <p style={{padding:'8px', backgroundColor:'#261e3e', borderRadius:'10px'}}>2x</p>
        <p style={{padding:'8px', backgroundColor:'#261e3e', borderRadius:'10px'}}>3x</p>
      </div>
    </div>
  );
}
