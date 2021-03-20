import React from 'react'
import './header2.css';
import SignInForm from './SignInForm';
function Header2(props) {
    return (
        <> 
          <div className='main_banner' style={{
            display:'block'
          }}>
             {props.value
              ?<div className='inside_banner'>
                 <h1 className='h1 display-4'>Unlimited movies,TV<br/>Shows and More</h1>
                 <h4 className='h4'>Watch anywhere. Cancel anytime.</h4>
                 <h5 className='h5'>Ready to watch? Enter Your email to create or restart your membership</h5>
                 
                    <div className='emaildiv'><input type='text' className='input-box' placeholder='Email Address'/></div>
                   <div className='buttondiv'> <button className='getbtn'>Get Started ></button></div>
              </div>     
             :<SignInForm />}               
              <div className="banner_fadeBottom" />
          </div>
            
        </>
    )
}

export default Header2
