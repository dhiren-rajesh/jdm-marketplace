import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'

function NSX() {
  return (
    <div>
      <Container>
        <Section
          title="Honda NSX"
          description="One of a Kind"
          backgroundImg="NSX.jpg"
        />
      </Container>
    </div>
  )
}

export default NSX

const Container = styled.div`
`
