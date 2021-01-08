import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { getTruckInfo } from '../Store/Actions';
import mapStateToProps from '../Store/State';

const StyledTruck = styled.div`
    display:flex;
    border: .5px solid lightgrey;
    flex-direction: column;
    align-items: left;
    background:#8EBCCD;
    color: white;
    padding: 1.4%;
    margin-bottom: 2%;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.7);
    box-shadow:2px 4px 3px rgba(0, 0, 0, 0.3);

    p{
        line-height: 1px;
    }
    h2{
        line-height:2px;
        /* color: #ff4486; */
    }

`


const DinerTruckCard = props => {

    return (
        <StyledTruck>
            <h2>{props.name}</h2>
            <img src={props.imageOfTruck} alt={props.name}/>
            <p>Cuisine: {props.cuisineType}</p>
            <p>Current Location: {props.truckLongitude} : {props.truckLatitude}</p>
            <p>Departure Time: {props.departureTime}</p>
        </StyledTruck>
    );
};

export default connect(mapStateToProps, { getTruckInfo })(DinerTruckCard);