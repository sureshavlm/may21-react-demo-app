import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Login from './Login'; //importing my own component
import Employee from './components/employee/Employee';
import Toggle from './components/toggle/Toggle';

const element = document.getElementById('root');

const employees= [ 
    { name: "Smith", dept: "IT" },
    { name: "Poppens", dept: "HR" }
   ];

ReactDOM.render(
  <>
    <Login title = "Sign-In" label = "Login"/>
    <Login title = "Sign-Up" label = "Register"/>
    <Toggle/>
    <Employee title = "Employee Component" employees = { employees } />
  </>,
  element
  );
