import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function RC213VS() {
  return (
    <div>
      <Container>
        <Section
          title="RC213V-S"
          description="Shining Future"
          backgroundImg="RC213VS.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Honda RC213V-S</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="Honda 1,000 cc Liquid-cooled, 90° V4, DOHC, 16-valves"
            topSpeed="188 mph"
            torque="11000 rpm"
            power="157 bhp"
            transmissions="6-Speed, constant mesh"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default RC213VS

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`