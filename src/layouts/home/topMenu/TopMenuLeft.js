import React from "react";
import logo from "../../../images/logo.png";
import TopMenuLeftMenu from "../../../components/topMenuLeft/TopMenuLeftOrder";
import TopMenuLeftOrder from "../../../components/topMenuLeft/TopMenuLeftOrder";
export default function TopMenuLeft() {
  return (
    <div style={{ display:'flex', justifyContent:'center'}}>
      <img src={logo} alt="" height={"40px"} />
      <TopMenuLeftMenu/>
      <TopMenuLeftOrder/>
    </div>
  );
}
