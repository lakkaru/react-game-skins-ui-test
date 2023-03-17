import React from 'react'
import BuyAndSell from './pageContent/BuyAndSell'
import SelectedVepons from './pageContent/SelectedVepons'

export default function PageContent() {
  return (
    <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
      <BuyAndSell/>
      <SelectedVepons/>
    </div>
  )
}
