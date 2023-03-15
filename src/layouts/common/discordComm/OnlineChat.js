import React from "react";
import ChatCountry from "../../../components/onlineChat/ChatCountry";

export default function OnlineChat() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2c2547",
        padding: "10px",
      }}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/160/194/original/speech-bubble-chat-icon-sign-design-free-png.png"
        alt=""
        height={"25px"}
      />
      <ChatCountry/>
      <div style={{ margin: "0px 10px" }}>
        <img
          src="data:image/png;base64,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"
          alt=""
          height={"10px"}
        />
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Eo_circle_blue_arrow-right.svg/1200px-Eo_circle_blue_arrow-right.svg.png"
        alt=""
        height={"10px"}
      />
    </div>
  );
}
