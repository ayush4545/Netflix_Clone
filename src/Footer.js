import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
function Footer() {
    return (
        <div className='footer_part'>
             <div className='footer_title'>Question? Call 000-111-222-1234</div>
             <div className='footer_rows'>
             <div className='row '>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>FAQ</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Help Center</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Account</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Media Center</a></div>
             </div>
             <div className='row '>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Investor Relations</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>jobs</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Ways to Watch</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Terms of use</a></div>
             </div>
             <div className='row '>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>privacy</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Cookie Preferences</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Corporate Information</a></div>
                 <div className='col-md-3 footer_part2'><a href='#' className='footer_data'>Contact Us</a></div>
             </div>
             </div>
             <p className='Break'></p>
             <p className='footer_data3 mt-5'>Netflix India clone by Ayush Mishra</p>
        </div>
    )
}

export default Footer
