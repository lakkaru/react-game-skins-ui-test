import React from 'react'
import TopMenuLeft from './topMenu/TopMenuLeft'
import TopMenuRight from './topMenu/TopMenuRight'

export default function TopMenu() {
  return (
    <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',  minHeight:'40px', padding:'10px', marginRight:'10px'}}>
      <TopMenuLeft/>
      <TopMenuRight/>
    </div>
  )
}
