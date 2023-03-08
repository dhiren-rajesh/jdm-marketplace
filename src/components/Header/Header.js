import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href='/'>
        <h1>JDM</h1>
      </a>
      <Menu>
        <a href="/NSX">NSX</a>
        <a href="/Supra">Supra</a>
        <a href="/Skyline">Skyline</a>
        <a href="/RX7">RX-7</a>
        <a href="/EvoIX">Evo-IX</a>
        <a href="/YZRM1">YZR-M1</a>
        <a href="/RC213VS">RC213V-S</a>
      </Menu>
      <RightMenu>
        <a href="/#">JDM Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="/NSX">Honda NSX</a></li>
        <li><a href="/Supra">Toyota Supra MK4</a></li>
        <li><a href="/Skyline">Nissan Skyline GTR R34</a></li>
        <li><a href="/RX7">Mazda RX-7 FD</a></li>
        <li><a href="/EvoIX">Mitsubushi Lancer Evolution IX</a></li>
        <li><a href="/YZRM1">Yamaha YZR-M1</a></li>
        <li><a href="/RC213VS">Honda RC213V-S</a></li>
        <li><a href="/#">Existing Inventory</a></li>
        <li><a href="/#">Test Drive</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a{
    color: #BDCDD6;
    font-size: 20px;
    h1{
      font-family: Mightsilly Regular;
      font-size: 50px;
    }
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

  @media(max-width: 860px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    flex-wrap: nowrap;
    color: #BDCDD6;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #BDCDD6;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 315px;
  z-index: 15;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  overflow-y: scroll;
  li{
    padding: 15px;
    border-bottom: 1px solid orange;
    a{
      color: black;
      font-weight: 600;
    } 
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(ClearIcon)`
  cursor: pointer;
` 