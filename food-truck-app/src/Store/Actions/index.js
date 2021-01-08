import axios from 'axios';
import axiosWithAuth from '../../Utils/axiosWithAuth';

// login types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS_DINER = 'LOGIN_SUCCESS_DINER';
export const LOGIN_SUCCESS_OPERATOR = 'LOGIN_SUCCESS_OPERATOR';
export const LOGIN_FAIL = 'LOGIN_FAIL';
// signup types
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
// get truck types
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
// add truck types
export const ADDTRUCK_START = 'ADDTRUCK_START';
export const ADDTRUCK_SUCCESS = 'ADDTRUCK_SUCCESS';
export const ADDTRUCK_FAIL = 'ADDTRUCK_FAIL';
// delete truck types
export const DELETE_TRUCK_START = 'DELETE_TRUCK_START';
export const DELETE_TRUCK_SUCCESS = 'DELETE_TRUCK_SUCCESS';
export const DELETE_TRUCK_FAIL = 'DELETE_TRUCK_FAIL';
export const DELETE_TRUCK_DONE = 'DELETE_TRUCK_DONE';
// update truck types
export const UPDATE_TRUCK_START = 'UPDATE_TRUCK_START';
export const UPDATE_TRUCK_SUCCESS = 'UPDATE_TRUCK_SUCCESS';
export const UPDATE_TRUCK_FAIL = 'UPDATE_TRUCK_FAIL';
export const UPDATE_TRUCK_DONE = 'UPDATE_TRUCK_DONE';
// get favorites types
export const GET_FAVORITES_START = 'GET_FAVORITES_START';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_FAIL = 'GET_FAVORITES_FAIL';
// add favorite types
export const ADD_FAVORITES_START = 'ADD_FAVORITE_START';
export const ADD_FAVORITES_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITES_FAIL = 'ADD_FAVORITE_FAIL';
export const ADD_FAVORITES_DONE = 'ADD_FAVORITE_DONE';

// signout type
export const SIGN_OUT = 'SIGN_OUT';

// login action
export const logIn = signInData => dispatch => {
    dispatch({ type: LOGIN_START });
    // changed to 'https'
    axios.post('https://ccorvo-foodtruck-tracker-2021.herokuapp.com/login', `grant_type=password&username=${signInData.username}&password=${signInData.password}`, {
            headers: {
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.access_token);

            axiosWithAuth().get('/users/getuserinfo/')
            .then(res => {
                console.log(res);
                if (res.data.roles[0].role.name === 'DINER') {
                    dispatch({ type: LOGIN_SUCCESS_DINER, payload: res.data });
                } else {
                    dispatch({ type: LOGIN_SUCCESS_OPERATOR, payload: res.data });
                }
            })

            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err });
        });

};

// signup action diner
export const signUpDiner = dinerData => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('http://', dinerData)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};

// signup action operator
export const signUpOperator = operatorData => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('http://', operatorData)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};

// get trucks action
export const getTruckInfo = () => dispatch => {
    dispatch({ type: REQUEST_START });
    axiosWithAuth().get('/trucks/trucks')
        .then(res => {
            console.log(res);
            dispatch({ type: REQUEST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: REQUEST_FAIL, payload: err });
        });
};

// add truck action
export const addTruck = truckData => dispatch => {
    dispatch({ type: ADDTRUCK_START });
    axiosWithAuth().post('/trucks/truck', truckData)
        .then(res => {
            console.log(res);
            dispatch({ type: ADDTRUCK_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADDTRUCK_FAIL, err })
        });
};

// delete truck action
export const deleteTruck = truckId => dispatch => {
    dispatch({ type: DELETE_TRUCK_START });
    axiosWithAuth().delete(`http://${truckId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_TRUCK_SUCCESS, payload: res.data });
            dispatch({ type: DELETE_TRUCK_DONE });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: DELETE_TRUCK_FAIL, payload: err });
        });
};

// update truck action
export const updateTruck = (truckId, truckData) => dispatch => {
    dispatch({ type: UPDATE_TRUCK_START });
    axiosWithAuth().put(`http://${truckId}`, truckData)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_TRUCK_SUCCESS, payload: res.data });
            dispatch({ type: UPDATE_TRUCK_DONE });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: UPDATE_TRUCK_FAIL, payload: err })
        });
};

// get favorites action
export const getFavorites = () => dispatch => {
    dispatch({ type: GET_FAVORITES_START });
    axiosWithAuth().get('/users/getuserinfo/')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_FAVORITES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_FAVORITES_FAIL})
        })
}

// add favorites action
export const addFavorte = (userId, truckFavs) => dispatch => {
    dispatch({ type: ADD_FAVORITES_START });
    axiosWithAuth().patch(`/users/user/${userId}`, truckFavs)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_FAVORITES_SUCCESS, payload: res.data });
            dispatch({ type: ADD_FAVORITES_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_FAVORITES_FAIL })
        });
};


// sign out
export const signOut = () => dispatch => {
    localStorage.clear();
    dispatch({ type: SIGN_OUT });
};