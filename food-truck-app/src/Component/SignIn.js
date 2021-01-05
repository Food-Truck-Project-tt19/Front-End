import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import styled from 'styled-components'

// form schema
import { signInFormSchema } from './FormSchema/signInFormSchema';


// initial state
const initialDisabled = true

const initialFormValues = {
    username: "",
    password: "",
}
const initialFormErrors = {
    username: "",
    password: "", 
}

const initialUsers = []


const SignIn = () => {

    // component state
    const [disabled, setDisabled] = useState(initialDisabled)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [users, setUsers] = useState(initialUsers)


    useEffect(()=>{
        signInFormSchema.isValid(formValues).then((valid)=>{
            setDisabled(!valid)
        })
    }, [formValues])

    // event handlers

    const inputChange = (event) => {

      event.preventDefault();

     const {name, value} = event.target;
        yup
          .reach(signInFormSchema, name) 
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            });
          })
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            });
          });
    
        setFormValues({
          ...formValues,
          [name]: value, 
        });
      };

  
    
      const onSubmit = (evt) => {

        
        const newUser = {
          username: formValues.username,
          password: formValues.password,
        }
        
        setUsers([...users, newUser])
        setFormValues(initialFormValues)
        
        
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
            onChange={inputChange}
            /><span className='error'>{formErrors.username}</span>
        </label>
        <br/>
        <label>
            <span>Password:</span><input
            placeholder='enter your Password'
            name='password'
            type='password'
            onChange={inputChange}
            /><span className='error'>{formErrors.password}</span>
        </label>
        </div>
        <div className='form submit'>
           <button disabled={disabled}>Sign In</button>
        </div>
        </form>
        </StyledSignIn>
    );

};

const StyledSignIn = styled.div`

padding: 3em 5em 5em 5em;
  max-width: 100%;
  height:82vh;
  h1 {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  }
  .error {
      color: #F95532;
  }

`

export default SignIn;