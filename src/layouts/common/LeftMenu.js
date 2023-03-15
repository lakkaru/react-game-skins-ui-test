import React from 'react'
import LeftMenuDown from './leftMenu/LeftMenuDown'
import LeftMenuUp from './leftMenu/LeftMenuUp'

export default function LeftMenu() {
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-between', margin: "0px 10px 0px 10px",  height:'100vh'}}>
      <LeftMenuUp/>
      <LeftMenuDown/>
    </div>
  )
}
