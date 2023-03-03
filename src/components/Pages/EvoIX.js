import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function EvoIX() {
  return (
    <div>
      <Container>
        <Section
          title="Mitsubushi Lancer Evolution IX"
          description="Own the Road"
          backgroundImg="EvoIX.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Mitsubushi Lancer Evolution IX</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="2.0 L 4G63 Inline 4 Turbocharged"
            topSpeed="155 mph"
            torque="6500 rpm"
            power="287 bhp"
            transmissions="6-speed manual 5-speed manual 5-Speed F5A5 automatic"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default EvoIX

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`