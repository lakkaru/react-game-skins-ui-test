import React from "react";
import DiscordComm from "./home/DiscordComm";
import LeftMenu from "./home/LeftMenu";
import TopMenu from "./home/TopMenu";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#7b7fbc", padding: "40px" }}>
      <div style={{ borderRadius: "20px",backgroundColor:'#272042' }}>
        <TopMenu />
        <div style={{ display: "flex"}}>
          <LeftMenu />
          <div style={{ display: "flex", flex:2, border:'10px solid #201938', borderRadius:'15px' }}>
            <p>buying selling</p>
            <p>selected vepons</p>
          </div>
          <DiscordComm />
        </div>
      </div>
    </div>
  );
}
