import React from 'react'
import RoundInfo from './selectedVepons/RoundInfo'
import StartCard from './selectedVepons/StartCard'
import Vepons from './selectedVepons/Vepons'

export default function SelectedVepons() {
  return (
    <div style={{flex:2}}>
      <StartCard/>
      <RoundInfo/>
      <Vepons/>
    </div>
  )
}
