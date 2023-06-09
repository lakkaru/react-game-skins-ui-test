import React from "react";
import logo from "../../../images/logo.png";
import TopMenuLeftMenu from "../../../components/topMenuLeft/TopMenuLeftMenu";
import TopMenuLeftOrder from "../../../components/topMenuLeft/TopMenuLeftOrder";
export default function TopMenuLeft() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} alt="" height={"40px"} style={{marginLeft:'20px'}}/>
      <div style={{display:'flex', marginLeft:'50px', gap:'15px'}}>
        <TopMenuLeftMenu />
        <TopMenuLeftOrder />
      </div>
    </div>
  );
}
