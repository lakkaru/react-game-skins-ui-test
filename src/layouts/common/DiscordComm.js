import React from 'react'
import Discode from '../../components/discodeComm/Discode'
import SendMessage from '../../components/discodeComm/SendMessage'
import Messages from './discordComm/messages/Messages'
import OnlineChat from './discordComm/OnlineChat'

export default function DiscordComm() {
  return (
    <div style={{ backgroundColor:'#2c2547'}}>
      <div>
      <OnlineChat/>
      <Discode/>
      <Messages/>
      <div style={{margin:'0px 10px'}}>
      <SendMessage/>
      </div>
      </div>
      
    </div>
  )
}
