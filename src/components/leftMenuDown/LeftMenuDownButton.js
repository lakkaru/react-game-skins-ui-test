import React from "react";

export default function LeftMenuDownButton({ button }) {
  return (
    <div>
      <button
        style={{
          border:'1px solid #393244',
          height: "55px",
          width: "55px",
          borderRadius: "15px",
          backgroundColor:'#272042'
        }}
      >
        <img src={button.icon} alt="" height="15px" />
      </button>
    </div>
  );
}
