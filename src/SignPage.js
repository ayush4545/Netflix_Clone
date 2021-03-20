import React from 'react'
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import './jumbotron.css';
import './App.css'
function SignPage() {
    return (
        <>
           <div className="container1">
            <div style={{
            backgroundSize:'cover',
            backgroundImage:`url(
                'https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg'
            )`,
            backgroundPosition:'center center',
          }}>
            <Header />
            <Header2 />
            </div>
            

             <Footer />
            </div>

        </>
    )
}

export default SignPage
