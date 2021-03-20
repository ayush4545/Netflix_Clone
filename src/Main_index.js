import React from 'react'
import './jumbotron.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Jumbotron(props) {
    let val=props.direction

    return (
        <div className='item'>
            <div style={{flexDirection:val}} className='div_main'>
            <div className="pane">
                <h1 className='h1'>{props.title}</h1>
                
                <div className='subtitle'>{props.subtitle}</div>
            </div>
            <div className='pane'>
                 <img src={props.image} alt={props.alt} className='jumbimg'/>
            </div>
           
            </div>

        </div>
    )
}

export default Jumbotron