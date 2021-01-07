import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTruckInfo } from '../Store/Actions';
import { getFavorites } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import OperatorTruckCard from './OperatorTruckCard';

const OperatorHome = (props) => {

    // fetch trucks
    useEffect(() => {
        props.getFavorites();
    }, []);



    return (
        <div>
            <h2>Operator trucks</h2>
            {props.favorites.map(item => <OperatorTruckCard key={item.id} {...item}/>)}
        </div>
    );
};

export default connect(mapStateToProps, { getTruckInfo, getFavorites })(OperatorHome);