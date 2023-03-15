import React from 'react'
import StartAmount from '../../../../../components/startRow/StartAmount'
import ZoomPower from '../../../../../components/startRow/ZoomPower'

export default function StartRow () {
  return (
    <div style={{display:'flex', justifyContent:'space-between', paddingTop:'15px', gap:'10px'}}>
        <ZoomPower/>
        <StartAmount/>
    </div>
  )
}
