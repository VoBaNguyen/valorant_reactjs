import React from 'react'
import Ability from '../components/ability'
import Hero from '../components/hero'
import { useEffect, useState } from 'react'
import axiois from 'axios'

export default function Agent() {
  const [primaryAgent, setPrimaryAgent] = useState()
  const [listAgents, setAgentData] = useState([])

  useEffect(() => {
    const agentAPI =
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
    axiois({
      method: 'GET',
      url: agentAPI
    })
      .then(res => {
        setAgentData(res.data.data)
        setPrimaryAgent(res.data.data[0])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Hero
        primaryAgent={primaryAgent}
        setPrimaryAgent={setPrimaryAgent}
        listAgents={listAgents}
      />
      {primaryAgent && <Ability primaryAgent={primaryAgent} />}
    </>
  )
}
