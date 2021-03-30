import React, { Component } from 'react';
import './form.css'
class Auth extends Component {
    
    constructor() {
        super()
        this.state = {
            isRegister: false,
            loggedIn:true
        }
    }
    login() {


        console.warn("state", this.state)
        fetch('http://localhost:4000/users/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.token);

                localStorage.setItem("auth", JSON.stringify(resp.token))
                window.location.pathname="/";
                        })
        })
        
    }
    register() {
        console.warn("state", this.state)
        fetch('http://localhost:4000/users/register',{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.token);
                localStorage.setItem("auth", JSON.stringify(resp.token))

            })
        });
    }  
    render() { 
        return (
            <div>
                {
                    !this.state.isRegister ?
                
                        <div className="contain">
                        <div className="logi">
                            <input type="text"
                                placeholder="Email"
                                className="username"
                                onChange={(e) => { this.setState({ username: e.target.value }) }} /><br></br>
                            <input type="text"
                                placeholder="Password"
                                className="password"
                                onChange={(p) => { this.setState({ password: p.target.value }) }} />
                            <br></br>
                            <button className="loginbtn" onClick={() => this.login()}>Login</button>
                            <br></br>
                            <button className="signupbtn" onClick={() => this.setState({ isRegister: true })}> Go to Register</button>
                        </div>
                        </div>
                          :
                        <div>
                        <div>
                            <input type="text"
                            className="RegFirst"
                                placeholder="Enter First Name"
                                onChange={(e) => { this.setState({ firstName: e.target.value }) }} /><br></br>
                            <input type="text"
                            className="RegLast"
                                placeholder="Enter Last Name"
                                onChange={(p) => { this.setState({ lastName: p.target.value }) }} />
                            <br></br>
                            <input type="text"
                            className="RegUser"
                                placeholder="Enter UserName"
                                onChange={(p) => { this.setState({ email : p.target.value }) }} />
                            <br></br>
                            <input type="password"
                            className="RegPass"
                                placeholder="Enter Password"
                                onChange={(p) => { this.setState({ password: p.target.value }) }} />
                            <br></br>
                           
                            <input type="number"
                            className="RegPass"
                                placeholder="Enter Phone"
                                onChange={(p) => { this.setState({ phone: p.target.value }) }} />
                            <br></br>
                           
                            <br></br>
                            <button onClick={() => this.register()}>Register</button>
                            <br></br>
                            <button onClick={() => this.setState({ isRegister: false })}>Go to Login</button>

                        </div>
                        </div>
                    
                }
              
            </div>
        );
    }
}
export default Auth;