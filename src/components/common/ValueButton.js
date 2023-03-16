import React from "react";

export default function ValueButton({value}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#282043",
        borderRadius: "15px",
        padding: "15px",
        gap: "5px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "0px 5px",
        }}
      >
        $
      </div>
      <p>{value}</p>
    </div>
  );
}
