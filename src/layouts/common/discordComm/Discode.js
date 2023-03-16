import React from "react";

export default function Discode() {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left"}}>
          <div >
            <p style={{ fontSize: "8px", color: "#544f8a" }}>JOIN OUR</p>
            <p style={{ fontSize: "10px", fontWeight:'bold' }}>DISCORD COMMUNITY</p>
          </div>
          <div style={{backgroundColor:'#6a67f2', padding:'5px', borderRadius:'10px', maxWidth:'60px', textAlign:'center', marginTop:'10px'}}><p style={{ fontSize: "10px"}}>Join Now</p></div>
        </div>
        <img src='https://static.vecteezy.com/system/resources/previews/016/639/991/original/discord-3d-icon-free-png.png' alt='' height={'70px'}/>
      </div>
    </div>
  );
}
