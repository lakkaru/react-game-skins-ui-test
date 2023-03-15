import React from "react";

export default function VeponInfo({name, model, arrow_color, vepon_img, zoom}) {
  return (
    <div style={{padding:'10px', border:'1px solid #333', borderRadius:'25px', minWidth:'175px'}}>
      <div style={{ display: "flex", justifyContent:'space-between' }}>
        <div style={{textAlign:'left'}}>
          <p style={{color:'#777'}}>{name}</p>
          <p>{model}</p>
        </div>
        <div
          style={{
            borderTop:`25px solid ${arrow_color}`,
            borderLeft:'25px solid #251e3f',
            borderTopLeftRadius:'5px',
            borderStartEndRadius:'8px',
            // borderEndEndRadius:'2px'  
                
          }}
        ></div>
      </div>
      <img
        src={vepon_img}
        alt=""
        height={"50px"}
      />
      <p style={{textAlign:'left'}}>{zoom}</p>
    </div>
  );
}
