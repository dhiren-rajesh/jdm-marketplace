import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function NSX() {
  return (
    <div>
      <Container>
        <Section
          title="Honda NSX"
          description="One of a Kind"
          backgroundImg="NSX.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Honda NSX</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="3 Litre C30A V6"
            topSpeed="170 mph"
            torque="7300 rpm"
            power="270-290 bhp"
            transmissions="4-speed automatic 5-speed manual 6-speed manual"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default NSX

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`
