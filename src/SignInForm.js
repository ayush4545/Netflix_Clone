import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './signform.css'
import {NavLink,Redirect} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import requests from './requests';
function SignInForm() {
    const [email_id,setEmail]=useState()
    const [password,setPassword]=useState()

    const emailInput=(event)=>{
      setEmail(event.target.value)
     
    }

    const passwordInput=(event)=>{
        setPassword(event.target.value)
      }

    const submitFrom=()=>{
    
         <Redirect path='/main'/>
    }
    return (
        <div className='form_main_div '>
              <h2 className='form_h2 text-white'>Sign In</h2>
              <form action='/main'>
                  <div className='form-group Input_form'>
                      <input type='text' placeholder='Email or Phone Number' value={email_id} className='form-control input_ is-valid' onChange={emailInput} />
                      <div class="valid-feedback text-warning">
                      Please enter a valid email address or phone number.
                      </div>
                  </div>
                  <div className='form-group Input_form'>
                      <input type='password' placeholder='Password'  value ={password} className='form-control password_ is-valid' onChange={passwordInput}/>
                      <div class="valid-feedback text-warning">
                      Your password must contain between 4 and 60 characters.
                      </div>
                  </div>
                  <div className='formBtn'>
                      <button class='btn btn-danger btn-block btn-lg' onClick={submitFrom}>Sign In</button>
                  </div>
              </form>
                  <div className='form-check check_form d-flex justify-content-between'>
                      <div>
                      <input type='checkbox' placeholder='Remember Me' name='checkbox' className='form-check-input check_' />
                      <label class="form-check-label checkbox_" for="checkbox">Remember Me</label>
                      </div>
                      <div className='need_help_div'>
                          Need Help?
                      </div>
                  </div>
                      <div className='facebook_part mt-5'>
                       <FacebookIcon className='text-white bg-primary'/>
                       <a href='#' className='loginFacebook ml-2'>Login with Facebook</a>
                      </div>
                      <div className='d-flex mt-2'>
                      <p className='abc'>New To Netflix ?</p>
                      <NavLink exact  activeClassName='active_class' to='/' role='button'  className='signuplink ml-2 fs-5'>Sign Up Now</NavLink>
                     </div>
            
        </div>
    )
}

export default SignInForm
