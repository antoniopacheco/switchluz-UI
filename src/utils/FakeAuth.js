import React from 'react';
import axios from 'axios';
const AuthPaths = require('../services/api/paths').authPaths;
export const FakeAuth = {
    isAuthenticated : false,

    authenticate(payload,cb,cbun) {
      const URL = AuthPaths.login;
      axios.post(URL,payload).then((response)=>{
        sessionStorage.setItem('switchLuzAT', response.data.id);
        axios.defaults.params = {};
        axios.defaults.params['access_token'] = response.data.id
        this.isAuthenticated = true
        setTimeout(cb, 100)
      },(error)=>{
        if(error.response && error.response.status === 401){
          cbun();
        }else{
          // handle other kinds of errors
        }
      });

    },
    signout(cb) {
      const URL = AuthPaths.logout;
      axios.post(URL).then((response)=>{
        setTimeout(cb, 100)
      });
      this.isAuthenticated = false;
      sessionStorage.clear();
    },
    logInFromStorage(){
      axios.defaults.params = {};
      axios.defaults.params['access_token'] = sessionStorage.getItem('switchLuzAT');
      this.isAuthenticated = true;
    }
  }