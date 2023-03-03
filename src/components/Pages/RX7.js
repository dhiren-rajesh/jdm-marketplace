import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function RX7() {
  return (
    <div>
      <Container>
        <Section
          title="Mazda RX-7"
          description="The Monalisa"
          backgroundImg="RX7.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Mazda RX-7</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="1308 cc 13B-REW twin-turbo twin-rotor"
            topSpeed="120 mph"
            torque="6500 rpm"
            power="252 bhp"
            transmissions="5-speed manual 4-speed automatic"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default RX7

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`