import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a href='/'>
        <h1>JDM</h1>
      </a>
      <Menu>
        <a href="#">NSX</a>
        <a href="#">Supra</a>
        <a href="#">Skyline</a>
        <a href="#">RC213V</a>
        <a href="#">YZR-M1</a>
        <a href="#">H2R</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">JDM Account</a>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  a{
    color: #BDCDD6;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: #BDCDD6;
  }
`

const RightMenu = styled.div`
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: #BDCDD6;
  }
`
