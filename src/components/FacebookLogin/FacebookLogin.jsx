import React, { Component } from 'react';

import './FacebookLogin.css';
import axios from 'axios';








class FacebookLogin extends Component {


    // signIn = () => {

    //     axios.get(`/api/facebook/send`, { withCredentials : true})
    //     .then((response) => {
    //         response.sendStatus(200);
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }

    render() {

        //dev version
        // return (
        //     <div style={{ 'padding': '10px' }}> <a href="https://localhost:3000.com/api/facebook/send" className="btn btn-lg btn-social btn-facebook">
        //         <i class="fa fa-facebook fa-fw"></i> Sign in with Facebook</a></div>
        // );

        //deploy version
       return (
            <div style={{ 'padding': '10px' }}> <a href="https://policybytes.herokuapp.com/api/facebook/send" className="btn btn-lg btn-social btn-facebook">
                <i class="fa fa-facebook fa-fw"></i>  Sign in with Facebook</a></div>
        );
    }
}

export default FacebookLogin;

