import React from 'react'
import ActionButtons from './buyAndSell/ActionButtons'
import SelectBalance from './buyAndSell/SelectBalance'
import SkinCards from './buyAndSell/SkinCards'
import TopChart from './buyAndSell/TopChart'

export default function BuyAndSell() {
  return (
    <div style={{display:'flex', flexDirection:'column', flex:'1', position:'relative'}}>
      <TopChart/>
      <SelectBalance/>
      <SkinCards/>
      <div style={{position:'absolute', bottom:'0px', backgroundColor:'#201938', padding:'5px', width:'100%'}}>
        <ActionButtons/>
      </div>
    </div>
  )
}
