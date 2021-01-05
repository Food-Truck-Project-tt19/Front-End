import React, { useState, useEffect } from 'react';
import * as yup from 'yup'

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

    
      const onSubmit = () => {
        
        const newUser = {
            username: formValues.username,
            password: formValues.password,
        }

        setUsers([...users, newUser])
        setFormValues(initialFormValues)
        
      }

      const submit = (event) =>{
        event.preventDefault();
        onSubmit();
      }

   

    return (
        <div className='container'>
        <form className='form container' onSubmit={submit}>
            <h3>Sign In</h3>
        <div className='form inputs'>
        <label>
            <span>Username:</span><input
            placeholder='enter your Username'
            name='username'
            type='text'
            onChange={inputChange}
            />{formErrors.username}
        </label>
        <br/>
        <label>
            <span>Password:</span><input
            placeholder='enter your Password'
            name='password'
            type='password'
            onChange={inputChange}
            />{formErrors.password}
        </label>
        </div>
        <div className='form submit'>
           <button disabled={disabled}>Sign In</button>
        </div>
        </form>
        </div>
    );

};

export default SignIn;