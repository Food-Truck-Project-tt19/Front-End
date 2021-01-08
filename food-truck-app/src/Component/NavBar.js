import React from 'react';
import styled from 'styled-components'

const NavBar = () => {
    return (
        <StyledNavBar>
            <div className='logo'>Food Truck Tracker</div>
            <a href='/signin' onClick={() => {window.localStorage.clear();}}>Sign out</a>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`

@import url("https://fonts.googleapis.com/css?family=Oleo+Script:400|Open+Sans:300,300italic,600,600italic,800");
background:#0090c5;
display:flex;
justify-content:space-between;
padding: 3%;


a{
    color: white;
    text-decoration:none;
    font-weight: 800;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    margin:auto 0;
}

.logo{
    background: #ff4486;
			color: #fff;
			border-radius: 6px;
			font-family: 'Oleo Script', serif;
			font-weight: 400;
			padding: 0.05em 0.2em;
			font-size: 2em;
            letter-spacing: 0.05em;
            box-shadow:2px 4px 3px rgba(0, 0, 0, 0.3);
}

`


export default NavBar;