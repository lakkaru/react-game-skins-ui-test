import React from "react";

import DiscordComm from "./common/DiscordComm";
import TopMenu from "./common/TopMenu";
import LeftMenu from "./common/LeftMenu";
import PageContent from "./home/PageContent";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#7b7fbc", padding: "40px" }}>
      <div style={{ borderRadius: "20px", backgroundColor: "#272042" }}>
        <TopMenu />
        <div style={{ display: "flex" }}>
            <LeftMenu />
          <div
            style={{
              backgroundColor: "#201938",
              borderRadius: "15px 0px 0px",
              padding: "15px",
              flex:'2'
            }}
          >
            <PageContent />
          </div>
          <div style={{flex:'1'}}>
            <DiscordComm />
          </div>
        </div>
      </div>
    </div>
  );
}
