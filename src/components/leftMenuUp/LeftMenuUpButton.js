import React from "react";

export default function LeftMenuUpButton({ button }) {
  return (
    <div style={{margin:'10px 0px' }}>
      <button
        style={{
          backgroundColor: button.bgColor,
          height: "55px",
          width: "55px",
          border:'1px solid #393244',
          borderRadius: "10px",
        }}
      >
        <div>
          <div
            style={{
              border: "5px solid red",
              borderRadius: "50%",
              width: "4px",
              marginLeft: "35px",
              marginBottom: "3px",
              display:button.indication_status
            }}
          ></div>
          <img
            src={button.icon}
            alt=""
            height="15px"
          />
          <p style={{ marginTop: "5px" }}>{button.name.toUpperCase()}</p>
        </div>
      </button>
    </div>
  );
}
