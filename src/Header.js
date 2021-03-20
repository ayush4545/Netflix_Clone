import React from 'react'
import './header.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom'
function Header(props) {
    console.log(props.value)
    return (
        <>
        <div className="fadeBottom_header" />
        <div className='header_main'>
              <img className="header_logo ml-5"
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
            
            />
            
            {props.value
            ?<NavLink exact  activeClassName='active_class' to='/signin' role='button' className='btn1 a'>Sign In</NavLink>:
            null}
        </div>
        </>
    )
}

export default Header
