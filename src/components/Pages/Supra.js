import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function Supra() {
  return (
    <div>
      <Container>
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Toyota Supra MK4</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="5 Litre Twin-Turbo V12"
            topSpeed="222 mph"
            torque="7300 rpm"
            power="900 bhp"
            transmissions="4-speed automatic 5-speed manual 6-speed manual"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default Supra

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`