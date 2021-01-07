import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import DinerTruckCard from './DinerTruckCard';

const DinerHome = (props) => {


    // fetch trucks
    useEffect(() => {
        props.getTruckInfo();
    }, []);

    // event handlers

    if (props.isLoading){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        );
    };

    return (
        <div>
            <h2>List of trucks</h2>
                {props.data.map(item => <DinerTruckCard key={item.id} {...item}/>)}
        </div>
    );
};

export default connect(mapStateToProps, { getTruckInfo })(DinerHome);