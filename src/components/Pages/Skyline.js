import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'
import Dashboard from './Dashboard'

function Skyline() {
  return (
    <div>
      <Container>
        <Section
          title="Nissan Skyline GTR R34"
          description="Brian's Favorite"
          backgroundImg="Skyline.jpg"
          flag="exists"
        />
        <Wrap>
          <Description>
            <h2>Nissan Skyline GTR R34</h2>
            <p>Description</p>
          </Description>
          <Dashboard
            engine="2.6 L twin-turbocharged RB26DETT I6"
            topSpeed="165 mph"
            torque="7000 rpm"
            power="275 bhp"
            transmissions="6-speed Getrag 233 manual"
          />
        </Wrap>
      </Container>
    </div>
  )
}

export default Skyline

const Container = styled.div`
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`

const Description = styled.div`
`