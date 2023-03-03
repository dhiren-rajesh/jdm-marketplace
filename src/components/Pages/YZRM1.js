import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function YZRM1() {
  return (
    <div>
      <Container>
        <Section
          title="Yamaha YZR-M1"
          description="Revs Your Hearts"
          backgroundImg="YZRM1.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Yamaha YZR-M1</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="Inline-Four"
            topSpeed="211 mph"
            torque="5000 rpm"
            power="240 bhp"
            transmissions="6-speed cassette-type gearbox"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default YZRM1

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`