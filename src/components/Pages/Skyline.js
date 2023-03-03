import React from 'react'
import styled from 'styled-components'
import Section from '../Home/Section'

function Skyline() {
  return (
    <div>
      <Container>
        <Section
          title="Nissan Skyline GTR R34"
          description="Brian's Favorite"
          backgroundImg="Skyline.jpg"
        />
      </Container>
    </div>
  )
}

export default Skyline

const Container = styled.div`
`