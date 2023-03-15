import React from 'react'
import RoundInfoLeft from './startCard/roundInfo/RoundInfoLeft'
import RoundInforRight from './startCard/roundInfo/RoundInforRight'

export default function RoundInfo() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'15px', backgroundColor:'#261e3e', padding:'8px', borderRadius:'15px'}}>
      <RoundInfoLeft/>
      <RoundInforRight/>
    </div>
  )
}
