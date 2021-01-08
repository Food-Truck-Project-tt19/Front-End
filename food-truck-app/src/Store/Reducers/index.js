// import actions
import {
    LOGIN_START,
    LOGIN_SUCCESS_DINER,
    LOGIN_SUCCESS_OPERATOR,
    LOGIN_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    ADDTRUCK_START,
    ADDTRUCK_SUCCESS,
    ADDTRUCK_FAIL,
    DELETE_TRUCK_START,
    DELETE_TRUCK_SUCCESS,
    DELETE_TRUCK_FAIL,
    DELETE_TRUCK_DONE,
    UPDATE_TRUCK_START,
    UPDATE_TRUCK_SUCCESS,
    UPDATE_TRUCK_FAIL,
    UPDATE_TRUCK_DONE,
    GET_FAVORITES_START,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAIL,
    ADD_FAVORITES_START,
    ADD_FAVORITES_SUCCESS,
    ADD_FAVORITES_FAIL,
    ADD_FAVORITES_DONE,
    SIGN_OUT
} from '../Actions';

// initial state
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    addSuccess: false,
    role: '',
    username: '',
    dinerId: '',
    operatorId: '',
    error: '',
    data: []
};

// reducer function

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS_DINER:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                role: action.payload.roles[0].role.name,
                dinerId: action.payload.userid,
                username: action.payload.username,
                truckList: action.payload.mytrucklist,
                error: ''
            }
        case LOGIN_SUCCESS_OPERATOR:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                role: action.payload.roles[0].role.name,
                operatorId: action.payload.userid,
                username: action.payload.username,
                truckList: action.payload.mytrucklist,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                username: '',
                error: action.payload
            }
        case SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: action.payload
            }
        case REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                data: action.payload
            }
        case REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADDTRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case ADDTRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case ADDTRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: action.payload
            }
        case DELETE_TRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_TRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case DELETE_TRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_TRUCK_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: ''
            }
        case UPDATE_TRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_TRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case UPDATE_TRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_TRUCK_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: ''
            }
        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case GET_FAVORITES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                favorites: action.payload.mytrucklist
            }
        case GET_FAVORITES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_FAVORITES_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case ADD_FAVORITES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_FAVORITES_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: ''
            }
        default:
            return state;
    };
};