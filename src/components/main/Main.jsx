import React, { Component } from 'react'


import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Features from '../features/Features';
import RegisterForm from '../register-form/RegisterForm';
import Footer from '../footer/Footer.jsx'

export default class Main extends Component {
    constructor(){
        super();

    }

    componentWillMount(){
        
    }
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Features />
                <div className="container col-md-8">
                    <RegisterForm />
                </div>
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        )
    }
}
