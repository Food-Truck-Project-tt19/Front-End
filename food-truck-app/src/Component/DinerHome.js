import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import DinerTruckCard from './DinerTruckCard';

const StyledListTitle = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Oleo+Script:400|Open+Sans:300,300italic,600,600italic,800");

    #title{
            background: #ff4486;
            color: #fff;
			border-radius: 6px;
            font-family: 'Oleo Script', serif;
            text-align: center;
			font-weight: 400;
			padding: 0.05em 0.2em;
			font-size: 2em;
            letter-spacing: 0.05em;
            box-shadow:2px 4px 3px rgba(0, 0, 0, 0.3);
    }

`


const DinerHome = (props) => {


    // fetch trucks
    useEffect(() => {
        props.getTruckInfo();
    }, []);

    // event handlers

    return (
        <StyledListTitle>
            <h2 id='title'>List of trucks</h2>
                {props.data.map(item => <DinerTruckCard key={item.id} {...item}/>)}
        </StyledListTitle>
    );
};

export default connect(mapStateToProps, { getTruckInfo })(DinerHome);