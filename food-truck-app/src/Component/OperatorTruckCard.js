import React from 'react';
import { connect } from 'react-redux'
import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

const OperatorTruckCard = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.truck.imageOfTruck} alt={props.name}/>
            <p>Cuisine: {props.truck.cuisineType}</p>
            <p>Current Location: {props.truck.truckLongitude} : {props.truck.truckLatitude}</p>
            <p>Departure Time: {props.truck.departureTime}</p>
        </div>
    );
};

export default OperatorTruckCard;