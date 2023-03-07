import React from "react";

export default function Profile() {
  return (
    <div style={{display:'flex'}}>
      <div style={{textAlign:'right'}}>
        <div style={{display:'flex'}}>
          <p style={{color:'#777'}}>Good earning</p>
          <div style={{border:'5px solid yellow', borderRadius:'50%', height:'5px'}}></div>
        </div>
        <div>
            <p>Yev Ledo</p>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div style={{}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2P21SKcXYr5iTuBeLe8-ZFv_gv42oZBA5WcStlqf1DOe6a53sYXP3pYVKH3groOqTCE&usqp=CAU" alt='' height={"35px"}/>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt='' height={"20px"}/>
      </div>
    </div>
  );
}
