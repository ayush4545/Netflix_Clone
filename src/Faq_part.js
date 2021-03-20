import React from 'react'
import faqdata from './fixtures/faqs.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './faqs.css';
import Faq_main from './Faq_main'
function Faq_part() {
    return (
        <>
           
           <div className='question_part text-center'>
               <div className='inner_part'> 
                    <h1 className='title'>Frequently Asked Questions</h1>
                    <div className='frame'>
                    {faqdata.map((item)=>{
                        return <Faq_main key={item.id} header={item.header} body={item.body} />
                    })}
                    </div>
                    <h5 className='text-white'>Ready to watch? Enter Your email to create or restart your membership</h5>
                 
                    <div className='emaildiv'><input type='text' className='input-box2' placeholder='Email Address'/></div>
                   <div className='buttondiv'> <button className='faq_btn'>Get Started ></button></div>
                </div>
           </div>
        </>
    )
}

export default Faq_part
