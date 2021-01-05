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
// signout type
export const SIGN_OUT = 'SIGN_OUT';

// login action
export const logIn = signInData => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post('http://', signInData)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            if (res.data.type === 'diner') {
                dispatch({ type: LOGIN_SUCCESS_DINER, payload: res.data });
            } else {
                dispatch({ type: LOGIN_SUCCESS_OPERATOR, payload: res.data });
            }
        })
        .catch(err => {
            console.error(err);
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
    axiosWithAuth().get('http://')
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
    axiosWithAuth().post('http://', truckData)
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

// sign out
export const signOut = () => dispatch => {
    localStorage.clear();
    dispatch({ type: SIGN_OUT });
};