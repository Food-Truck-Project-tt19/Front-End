import React from 'react';
import { connect } from 'react-redux';
import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

const DinerTruckCard = props => {

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageOfTruck} alt={props.name}/>
            <p>Cuisine: {props.cuisineType}</p>
            <p>Current Location: {props.truckLongitude} : {props.truckLatitude}</p>
            <p>Departure Time: {props.departureTime}</p>
        </div>
    );
};

export default connect(mapStateToProps, { getTruckInfo })(DinerTruckCard);