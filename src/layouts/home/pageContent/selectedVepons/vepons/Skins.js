import React from "react";
import Skin from "../../../../../components/common/Skin";

export default function Skins({ skins }) {
  return (
    <div style={{ display: "flex" }}>
      <Skin image={skins.skin1Image} unColor={skins.unColor1} />
      <div style={{minWidth:'50px'}}>
        {skins.skin2Image &&<Skin image={skins.skin2Image} unColor={skins.unColor2} />}
      </div>
    </div>
  );
}
