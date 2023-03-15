import React from 'react'
import Deposit from './topMenuRight/Deposit'
import Notification from './topMenuRight/Notification'
import Profile from './topMenuRight/Profile'

export default function TopMenuRight() {
  return (
    <div style={{display:'flex', gap:'30px'}}>
      <Deposit/>
      <Notification/>
      <Profile/>
    </div>
  )
}
