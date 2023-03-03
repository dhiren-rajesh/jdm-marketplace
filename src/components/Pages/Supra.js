import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'

function Supra() {
  return (
    <div>
      <Container>
        <Section
          title="Toyota Supra MK4"
          description="Top Secret"
          backgroundImg="Supra.jpg"
        />
      </Container>
    </div>
  )
}

export default Supra

const Container = styled.div`
`