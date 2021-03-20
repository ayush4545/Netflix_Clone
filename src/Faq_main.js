
import React, { useState ,useEffect} from 'react'
import './faqs.css';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
function Faq_main(props) {
    const [btnCondition,setCondition]=useState(false)
    let val=''
    console.log('btn condition',btnCondition)
    // const btnChange=()=>{
    //       setCondition(true)
    // }
    return (
        <div className='items'>
            <div className='header_faq'>{props.header}
               {btnCondition 
               ?
               <CloseIcon className='closebtn' onClick={()=>setCondition(false)}/>
               :
              <AddIcon className='addbtn' onClick={()=>setCondition(true)}/>}
            </div>
            {btnCondition ? <div className='body_faq'>{props.body}</div>:null}
            
        </div>
    )
}

export default Faq_main
