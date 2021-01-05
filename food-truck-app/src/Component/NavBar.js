import React from 'react';
import styled from 'styled-components'

const NavBar = () => {
    return (
        <StyledNavBar>
            <img src='logo'/>
            <a href='#'>Sign out</a>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`

background:#0090c5;
display:flex;
justify-content:space-between;
padding: 3%;


a{
    color: white;
    text-decoration:none;
    font-weight: 800;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
}

`


export default NavBar;