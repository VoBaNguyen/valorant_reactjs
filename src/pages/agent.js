import React from 'react'
import Ability from '../components/ability'
import Hero from '../components/hero'
import { useEffect, useState } from 'react'
import axiois from 'axios'
import RecentContent from '../components/recent-content'

export default function Agent() {
  const [primaryAgent, setPrimaryAgent] = useState()
  const [listAgents, setAgentData] = useState([])

  useEffect(() => {
    axiois({
      method: 'GET',
      url: 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
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
      <RecentContent />
    </>
  )
}
