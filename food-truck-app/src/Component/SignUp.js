import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components'

// form schema
import { signUpFormSchema } from './FormSchema/signUpFormSchema';

const SignUpPage = styled.div`
  padding: 3em 5em 5em 5em;
  max-width: 100%;
  height:82vh;
  h1 {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  }
  .inputField {
    margin: 1rem;
  }
  label {
    display: flex;
    flex-direction: row;
    text-align: right;
  }
  .textBox {
    margin-left: 10px;
    flex: 0 0 200px;
  }
  .checkBox {
      margin-top: 8px;
  }
  .error {
      color: #F95532;
  }

`

// initial state
const initialSignUpForm = {
    username: '',
    password: '',
};

const initialSignUpErrors = {
    username: '',
    password: '',
};

const initialDisabled = true;

const SignUp = () => {

    // component state
    const [signUpForm, setSignUpForm] = useState(initialSignUpForm);
    const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    // event handlers
    const inputChange = (event) => {
        const {name, value} = event.target;

        yup.reach(signUpFormSchema, name)
            .validate(value)
            .then(valid => {
                setSignUpErrors({
                    ...signUpErrors, [name]:''
                })
            })
            .catch(error => {
                setSignUpErrors({
                    ...signUpErrors, [name]: error.errors
                })
            })
            setSignUpForm({
                ...signUpForm,
                [name]:value
            })
    }

    useEffect(() => {
        signUpFormSchema.isValid(signUpForm)
        .then(valid => {
            setDisabled(!valid);
        });
    }, [signUpForm]);

    return (
        <div>
            <SignUpPage>
            <h1>Sign Up!</h1>
            <div className='inputField'>
                <label className='error'>{signUpErrors.username}</label>
                <label className='error'>{signUpErrors.password}</label>
            </div>
            
            <div className='inputField'>
                <label>
                    Username:
                    <input 
                        name='username'
                        type='text'
                        value={signUpForm.username}
                        onChange={inputChange}
                        placeholder='Enter your username'
                        className='textBox'
                    />
                </label>
            </div>
            
            <div className='inputField'>
                <label>Password: 
                    <input
                        name='password'
                        type='password'
                        value={signUpForm.password}
                        onChange={inputChange}
                        placeholder='Enter your password'
                        className='textBox'
                    />
                </label>
            </div>

            <div className='inputField'>
                <label>Diner
                    <input 
                        name='radio'
                        type='radio'
                        value={signUpForm}
                    />
                </label>
            </div>
            <div className='inputField'>
                <label>Operator
                    <input 
                        name='radio'
                        type='radio'
                        value={signUpForm}
                    />
                </label>
            </div>

            <div className='inputField'>
                <button className='signUpButton' disabled={disabled}>Sign Up</button>
            </div>
            </SignUpPage>
            {/* build sign up form with:
            - name
            - password
            - diner or operator checkbox
            - etc...
            */}
        </div>
    );

};

export default SignUp;