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
            <p>
              An Inline-4 motorcycle designed by Yamaha Motor Company.
              Used by Valetino Rossi and Jorge Lorenzo. 
              Made mainly for racing in the MotoGP series. 
              An on-road version of the same for sale, to be used by casual drivers.
            </p>
          </Description>
          <Dashboard
            engine="1000cc Inline 4-cylinder with cross-plane crankshaft"
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
  flex: 0.8;
  text-align: justify;
  padding: 10px;
  p{
    margin-top: 15px;
  } 
`