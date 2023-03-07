import React from "react";

export default function TopMenuLeftOrder() {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent:'space-evenly',
        alignItems: "center",
        backgroundColor: "#201938",
        borderRadius: "15px",
        padding: "0px 10px 0px 10px",
      }}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20210425/original/pngtree-neon-hexagon-png-image_6248544.jpg"
        alt=""
        height={"15px"}
      />
      <div style={{paddingLeft:'10px'}}>
        <p style={{ color: "#aaa" }}>Order</p>
        <p>28,474</p>
      </div>
    </div>
  );
}
