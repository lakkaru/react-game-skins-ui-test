import React from 'react'
import Discode from './discordComm/Discode'
import OnlineChat from './discordComm/OnlineChat'

export default function DiscordComm() {
  return (
    <div style={{}}>
      <OnlineChat/>
      <Discode/>
      <p>Message</p>
    </div>
  )
}
