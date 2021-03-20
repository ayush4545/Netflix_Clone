import React from 'react'
import jumboData from './fixtures/jumbo.json';
import Jumbotron from './Main_index'
import './jumbotron.css';
import './App.css'
import Header from './Header';
import Header2 from './Header2';
import Faq_part from './Faq_part.js'
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom'
import App from './App';
import SignPage from './SignPage'
function Main() {
    return (
        <> 
        <Switch>
        <Route exact path='/'>
        <div className="container1">
            <div style={{
            backgroundSize:'cover',
            backgroundImage:`url(
                'https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg'
            )`,
            backgroundPosition:'center center',
          }}>
            <Header value='true'/>
            <Header2 value='true'/>
            </div>
            {jumboData.map((item)=>{
              return <Jumbotron  key={item.id} title={item.title} subtitle={item.subTitle} image={item.image} alt={item.alt} direction={item.direction}/>
            })}

            <Faq_part />
             <Footer />
            </div>
            </Route>
            <Route exact path='/main'>
              <App />
            </Route>
            <Route exact path='/signin'>
              <SignPage/>
            </Route>
            </Switch> 
        </>
    )
}

export default Main
