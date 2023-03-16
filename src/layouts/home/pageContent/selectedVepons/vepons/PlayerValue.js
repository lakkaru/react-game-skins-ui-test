import React from "react";
import ValueButton from "../../../../../components/common/ValueButton";

export default function PlayerValue({player}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'3px'}}>  
        <img src={player.playerImage} alt="" height={'50px'} style={{borderRadius:'40%', border:'1px solid #333'}}/>
      <ValueButton value={player.playerValue}/>
    </div>
  );
}
