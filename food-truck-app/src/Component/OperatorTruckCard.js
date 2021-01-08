import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
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
        font-weight: 800;
    }
    h2{
        line-height:2px;
        /* color: #ff4486; */
        margin-bottom: 4%;
    }
    span{
        color: #ff4486;
    }

`



const OperatorTruckCard = props => {
    return (
        <StyledTruck>
            <h2>{props.name}</h2>
            <img src={props.imageOfTruck} alt={props.name}/>
            <p>Name: <span>{props.name}</span></p>
            <p>Cuisine: <span>{props.cuisineType}</span></p>
            <p>Current Location: <span>{props.truckLongitude} : {props.truckLatitude}</span></p>
            <p>Departure Time: <span>{props.departureTime}</span></p>
        </StyledTruck>
    );
};

export default OperatorTruckCard;