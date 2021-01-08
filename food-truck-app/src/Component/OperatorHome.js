import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import { getTruckInfo, getFavorites, addTruck, addFavorte } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import OperatorTruckCard from './OperatorTruckCard';

const initialFormValues = {
    name: '',
    imageOfTruck: '',
    cuisineType: '',
    truckLongitude: '',
    truckLatitude: '',
    departureTime: '',
    customerRatingAvg: ''
}

const OperatorHome = (props) => {

    const [formValues, setFormValues] = useState(initialFormValues)

    // fetch trucks
    useEffect(() => {
        async function fetchData() {
            props.getTruckInfo();
        }
        fetchData();       
    }, []);

    // change handler
    const handleChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    };

    // submit handler
    const handleSubmit = event => {
        event.preventDefault();

        const newOperatorTruck = {
            name: formValues.name,
            imageOfTruck: formValues.imageOfTruck,
            cuisineType: formValues.cuisineType,
            truckLongitude: '100001',
            truckLatitude: '100002',
            departureTime: '12:01pm',
            customerRatingAvg: '5.0'
        }
        console.log(newOperatorTruck)
        props.addTruck(newOperatorTruck);
        setFormValues(initialFormValues);
        props.getTruckInfo();
        
        // for dealing with actual operator's truck
        // props.getFavorites();

    }

    if (!props.data){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        );
    };

    return (
        <StyledHome>

            <h2>New Truck</h2>
            <div className= 'container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Truck Name: 
                    <input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Truck Image: 
                    <input
                        type='text'
                        name='imageOfTruck'
                        value={formValues.imageOfTruck}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cuisine: 
                    <input
                        type='text'
                        name='cuisineType'
                        value={formValues.cuisineType}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
            <br/>
            </div>
            <h2>Food Trucks</h2>
            {props.data.map(item => <OperatorTruckCard key={item.truckid} {...item}/>)}

        </StyledHome>
    );
};

const StyledHome = styled.div`

color: #ff4486;


.container{
    background: #8ebccd;
    padding: 2%;
}

form{
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.7);
    margin-top: 2%;
    
}

`

export default connect(mapStateToProps, { getTruckInfo, getFavorites, addTruck, addFavorte })(OperatorHome);