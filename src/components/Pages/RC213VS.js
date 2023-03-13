import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from '../Sub-Components/Dashboard'

function RC213VS() {
  return (
    <div>
      <Container>
        <Section
          title="RC213V-S"
          description="Shining Future"
          backgroundImg="RC213VS/RC213VS.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Honda RC213V-S</h2>
            <p>
              A 1,000cc motorcycle designed by Honda Motor Corporation.
              Used by Marc Marquez and Dani Pedrosa. 
              Made mainly for racing in the MotoGP series. 
              An on-road version of the same for sale, to be used by casual drivers.
            </p>
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
  flex: 0.8;
  text-align: justify;
  padding: 10px;
  p{
    margin-top: 15px;
  } 
`