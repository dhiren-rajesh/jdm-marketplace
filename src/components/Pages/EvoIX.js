import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'

function EvoIX() {
  return (
    <div>
      <Container>
        <Section
          title="Mitsubushi Lancer Evolution IX"
          description="Own the Road"
          backgroundImg="EvoIX.jpg"
        />
      </Container>
    </div>
  )
}

export default EvoIX

const Container = styled.div`
`