import React from "react";
import Skin from "../../../../../components/common/Skin";
import ValueButton from "../../../../../components/common/ValueButton";

export default function OtherSkins({ otherSkin }) {
  return (
    <div style={{ minWidth: "135px" }}>
      {otherSkin.otherSkinValue && (
        <div style={{ display: "flex", gap: "3px" }}>
          <ValueButton value={otherSkin.otherSkinValue} />
          <Skin image={otherSkin.otherSkinImage} unColor={"#a62ee4"} />
        </div>
      )}
    </div>
  );
}
