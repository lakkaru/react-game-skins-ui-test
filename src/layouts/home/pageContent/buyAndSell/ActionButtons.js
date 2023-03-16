import React from 'react'
import ActionButton from '../../../../components/actionButtons/ActionButton'

export default function ActionButtons() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', gap:'20px'}}>
        <ActionButton btnName='Sell Skins' btnFill='#282043'/>
        <ActionButton btnName='Buy Skins' btnFill='#6a67f3'/>
        
    </div>
  )
}
