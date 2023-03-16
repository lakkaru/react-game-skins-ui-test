import React from "react";

export default function SendMessage() {
  return (
    <div
      style={{
        backgroundColor: "#1f1b36",
        padding: "10px",
        borderRadius: "15px",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}
    >
        <div>
        <p style={{fontSize:'.7em', color:'#777'}}>Type a message</p>
        </div>
      
      <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
        <img src='https://p1.hiclipart.com/preview/459/799/651/smile-icon-emotions-rounded-icon-interface-icon-emoticon-black-white-facial-expression-head-smiley-nose-png-clipart.jpg' alt='' height={'15px'}/>
        <img src='https://www.shareicon.net/download/2015/09/25/106917_mobile.svg' alt='' height={'30px'}/>
        
      </div>
    </div>
  );
}
