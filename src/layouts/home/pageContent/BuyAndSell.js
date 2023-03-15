import React from 'react'
import SelectBalance from './buyAndSell/SelectBalance'
import TopChart from './buyAndSell/TopChart'

export default function BuyAndSell() {
  return (
    <div style={{flex:1}}>
      <TopChart/>
      <SelectBalance/>
      <p>vepons</p>
      <p>Sell and buy skins</p>
    </div>
  )
}
