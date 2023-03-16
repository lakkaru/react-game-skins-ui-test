import React from "react";

export default function Message({image, name, message, time}) {
  return (
    <div>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start',gap:'5px',  padding:'10px'}}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU" alt="" height={"40px"} style={{borderRadius:'40%'}} />
      </div>
      <div style={{textAlign:'left'}}>
        <p style={{fontSize:'.8em'}}>DaveVotex</p>
        <p style={{fontSize:'.5em', color:'#777'}}>Administration, when is the next tournement?</p>
      </div>
      <div>
        <p style={{fontSize:'.5em', color:'#777'}}> 16:47</p>
      </div>
    </div>
    <hr style={{border:'1px solid #333'}}/>
    </div>
  );
}
