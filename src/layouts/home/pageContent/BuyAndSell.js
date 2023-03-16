import React from 'react'
import SelectBalance from './buyAndSell/SelectBalance'
import SkinCards from './buyAndSell/SkinCards'
import TopChart from './buyAndSell/TopChart'

export default function BuyAndSell() {
  return (
    <div style={{flex:1}}>
      <TopChart/>
      <SelectBalance/>
      <SkinCards/>
  
    </div>
  )
}
