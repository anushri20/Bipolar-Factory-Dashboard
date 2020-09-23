


import React, { Component } from 'react';



import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from '@material-ui/core';
import axios from 'axios';
import './login.css';

export default class Login extends Component {

componentDidMount() {

window.scrollTo(0, 0)

}

constructor(props) {

super(props);

this.state={

email: '',

password:'',

errors: {}

}


}
checker = (response) => {
    let arr = [];
    response.map((item) => {
      if (
        item.user_email == this.state.email &&
        item.password == this.state.password
      ) {
        arr.push(item);
      }
    });
    if (arr.length !== 0) {
      return true;
    }
  };
onChange = (e) => {
          this.setState({[e.target.name]: e.target.value});
            
}



submituserRegistrationForm= (e) => {

e.preventDefault();

if (this.validateForm()) {



var apiBaseUrl = "https://5f69b4b9d808b90016bc050d.mockapi.io/";

var data={

"user_email":this.state.email,

"password":this.state.password

}

var headers = {

'Content-Type': 'application/json',

}



axios.get(apiBaseUrl+'signup')
.then( (response)  => {
    this.checker(response.data);
    if(this.checker(response.data)){
        alert ("Login Successful")
    }
    else{
        alert("Invalid Credentials");
    }
})



}

}

validateForm() {

let errors = {};

let formIsValid = true;

if (!this.state.email) {

formIsValid = false;

errors["email"] = "*Please enter your email-ID.";

}

if (typeof this.state.email !== "undefined") {

//regular expression for email validation

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

if (!pattern.test(this.state.email)) {

formIsValid = false;

errors["email"] = "*Please enter valid email-ID.";

}

}

if (!this.state.password) {

formIsValid = false;

errors["password"] = "*Please enter your password.";

}

if (typeof this.state.password !== "undefined") {

if (!this.state.password.match(/^.*(?=.{8,}).*$/)) {

formIsValid = false;

errors["password"] = "*Please enter secure and strong password.";

}

}

this.setState({

errors: errors

});

return formIsValid;

}

render() {

return (

<div>

<div className="container">

<div className="row">

<div className="col-md-8 login-sec">

<h2 className="text-center">Login </h2>

<Form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >

<FormGroup>

<Label for="exampleEmail">Email</Label>

<Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.onChange} placeholder="Email Id" />

<div className="errorMsg">{this.state.errors.email}</div>

</FormGroup>

<FormGroup>

<Label for="examplePassword">Password</Label>

<Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.onChange} placeholder="Password" />

<div className="errorMsg">{this.state.errors.password}</div>

</FormGroup>

<FormGroup check>

<Label check>

<Input type="checkbox" />{' '}

Remember Me

</Label>

</FormGroup>

<div className="d-flex justify-content-center mt-3 login_container">

<Button type="submit" className="btn btn-login">Submit</Button>

</div>

<div className="mt-4">

<div className="d-flex justify-content-center links">

Don't have an account? <Link href="/new-user" to="/new-user" className="linka">Sign Up</Link>

</div>

<div className="d-flex justify-content-center links">

<a className="linka">Forgot your password?</a>

</div>

</div>

</Form>

</div>



</div>

</div>

</div>

)

}

}