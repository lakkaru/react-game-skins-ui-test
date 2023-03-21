import React from "react";

export default function SkinCard({category, chipColor, image, name, price, isSet }) {
  return (
    <div style={{minWidth:'132px', border: "1px solid #333",borderRadius:'10px', backgroundColor:'#251d3b', padding:'10px', whiteSpace:'normal',fontSize:'.7em' }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{}}>{category}</p>
        <div
          style={{
            borderTop: `25px solid ${chipColor}`,
            borderLeft: "25px solid #251e3f",
            borderTopLeftRadius: "5px",
            borderStartEndRadius: "8px",
          }}
        ></div>
      </div>
      <div style={{marginTop:'10px'}}>
        <img src={image} alt="" width={'100px'} height={'80px'}/>
      </div>
      <div style={{textAlign:'left'}}>
        <p style={{fontSize:'.7em'}}>{name}</p>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <p>{price}</p>
          {isSet && <div style={{backgroundColor:'#53f787', height:'15px',width:'15px', borderRadius:'50%'
        }}></div>}
        </div>
      </div>
    </div>
  );
}
