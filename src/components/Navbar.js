import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    height: 60px;
    background: red;
`

const Logo = styled(Link)`
    color: white;
`

const MenuBars = styled.i``

const NavMenu = styled.div``

function Navbar() {
    return (
        <Nav>
            <Logo>ELIXR</Logo>
            <MenuBars />
            <NavMenu>

            </NavMenu>
        </Nav>
    )
}

export default Navbar
