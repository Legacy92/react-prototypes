import React from 'react';
import Welcome from './welcome.js'
import { Route } from 'react-router-dom';
import Nav from './nav.js';
import OurMacarons from './our_macarons.js';
import GiftsParties from './gifts_parties';
import Contact from './contact';

export default () => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path='/' component={Welcome}/>
            <Route path='/our-macarons' component={OurMacarons}/>
            <Route path='/gifts-parties' component={GiftsParties}/>
            <Route path='/contact' component={Contact}/>
        </div>
    )
}