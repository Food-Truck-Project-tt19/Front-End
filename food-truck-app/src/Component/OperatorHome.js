import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import OperatorTruckCard from './OperatorTruckCard';

const OperatorHome = (props) => {

    // fetch trucks
    useEffect(() => {

        console.log(props.data.mytrucklist)
    }, []);

    return (
        <div>
            <h2>Operator trucks</h2>
            {props.data.mytrucklist.map(item => <OperatorTruckCard key={item.id} {...item}/>)}
        </div>
    );
};

export default connect(mapStateToProps, { getTruckInfo })(OperatorHome);