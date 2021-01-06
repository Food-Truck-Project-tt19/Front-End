import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../Store/Actions';
import mapStateToProps from '../Store/State';

import * as yup from 'yup'
import styled from 'styled-components'

// form schema
import { signInFormSchema } from './FormSchema/signInFormSchema';


// initial state
// const initialDisabled = true

// const initialFormValues = {
//     username: "",
//     password: "",
// }
// const initialFormErrors = {
//     username: "",
//     password: "", 
// }

const initialSignInData = {
  username: '',
  password: ''
}


const SignIn = (props) => {

    // component state
    // const [disabled, setDisabled] = useState(initialDisabled)
    // const [formValues, setFormValues] = useState(initialFormValues)
    // const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [signInData, setSignInData] = useState(initialSignInData);


    // useEffect(()=>{
    //     signInFormSchema.isValid(formValues).then((valid)=>{
    //         setDisabled(!valid)
    //     })
    // }, [formValues])

    // history hook
    const history = useHistory();

    // event handlers

    const inputChange = (event) => {

      setSignInData({
        ...signInData,
        [event.target.name]: event.target.value
      });

    //  const {name, value} = event.target;
    //     yup
    //       .reach(signInFormSchema, name) 
    //       .validate(value)
    //       .then(() => {
    //         setFormErrors({
    //           ...formErrors,
    //           [name]: "",
    //         });
    //       })
    //       .catch((err) => {
    //         setFormErrors({
    //           ...formErrors,
    //           [name]: err.errors,
    //         });
    //       });
    
    //     setFormValues({
    //       ...formValues,
    //       [name]: value, 
    //     });
      };

  
    
      const onSubmit = (event) => {
        event.preventDefault();
        props.logIn(signInData);
        
        // setFormValues(initialFormValues)
        

        
      }

    return (
        <StyledSignIn>
        <form className='form container' onSubmit={onSubmit}>
            <h3>Sign In</h3>
        <div className='form inputs'>
        <label>
            <span>Username: </span><input
            placeholder='enter your Username'
            name='username'
            type='text'
            value={signInData.username}
            onChange={inputChange}
            />
        </label>
        <br/>
        <label>
            <span>Password: </span><input
            placeholder='enter your Password'
            name='password'
            value={signInData.password}
            type='password'
            onChange={inputChange}
            />
        </label>
        </div>
        <div className='form submit'>
           <button>Sign In</button>
        </div>
        </form>
        {props.isLoggedIn && props.role === 'DINER' ? history.push('/diner/home') : null }
        {props.isLoggedIn && props.role === 'TRUCKOPERATOR' ? history.push('/operator/home') : null }
        </StyledSignIn>
    );

};

const StyledSignIn = styled.div`

padding: 3em 5em 5em 5em;
  max-width: 100%;
  height:82vh;
  font-family: 'Open Sans', sans-serif;
		font-size: 13pt;
		color: #696969;
		font-weight: 300;
		line-height: 2.25em;
  h1 {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  }
  .error {
      color: #F95532;
  }

  button{
    width: 20%;
    color: white;
    background: #0090c5;
    border: 0;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 800;
    transition: 0.2s;
  }

  button:hover{
    background: #10a0d5;
  }

  .inputs{

  }

`

export default connect(mapStateToProps, { logIn })(SignIn);