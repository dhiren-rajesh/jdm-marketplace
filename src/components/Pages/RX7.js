import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'

function RX7() {
  return (
    <div>
      <Container>
        <Section
          title="Mazda RX-7"
          description="The Monalisa"
          backgroundImg="RX7.jpg"
        />
      </Container>
    </div>
  )
}

export default RX7

const Container = styled.div`
`