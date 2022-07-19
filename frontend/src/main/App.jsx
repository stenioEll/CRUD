import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Routes from './Routes'
//import Home from '../components/home/Home'

import { BrowserRouter } from 'react-router-dom'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />   
            <Footer />
        </div>
    </BrowserRouter>
    