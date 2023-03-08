import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function RX7() {
  return (
    <div>
      <Container>
        <Section
          title="Mazda RX-7 FD"
          description="The Monalisa"
          backgroundImg="RX7.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Mazda RX-7 FD</h2>
            <p>
              A 2-door coupe with a rotary engine designed by Yoichi Sato.
              Called 'The Monalisa' of the JDM world. A Car many JDM fans crave for.
              Providing both automatic and manual transmissions, 
              running on twin-turbochargers this is a car like none other.
            </p>
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
  flex: 0.8;
  text-align: justify;
  padding: 10px;
  p{
    margin-top: 15px;
  } 
`
