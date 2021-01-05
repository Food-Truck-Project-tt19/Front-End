import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
    display:flex;
    border: 1px solid grey;
    flex-direction: column;
    align-items: left;
    background:#0090c5;
    color: white;
    line-height:5px;
    padding: 1.4%;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

`

const Footer = () => {
    return (
        <FooterBar>
              <address>
                <h4>&copy; Food Truck Tracker. All rights reserved.</h4>
                  <p>250 Montgomery St, </p>
                  <p>San Francisco, CA 94104 </p>
                  <p>(415) 262-4219</p>
              </address>
      </FooterBar>
    )
}

export default Footer;