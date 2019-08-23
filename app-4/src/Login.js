import React, { Component } from 'react';
//the above line is how you bring React into this component
//the line below is written so you use the 'export default' AND 'class {component name}
//...extends Component {}'
export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
        //the line below will
        //this.handleLogin = this.handleLogin.bind(this);
    }
    //below is a method that will change the 'state' data of this.state.username to what
    //the user is typing in the input box. See first input element to see how it is changed.
    handleUsernameChange = user =>
        this.setState({username: user});
    
    //below is a method that will change the 'state' data of this.state.password to what
    //the user is typing in the input box. See first input element to see how it is changed.
    handlePasswordChange = pass =>
        this.setState({password: pass});
    
    //below is a method that is letting the component know that when 'onClick' (see below in
    //button element), it will alert what the interpolated string says.
    handleLogin = () =>
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    

    render() {
        return (
            <div>
                {/* below is a text type of input that will 'onChange' how the method is wanting
                to change according to return line and what is typed in the input box for username */}
                <input type= 'text' onChange={e => this.handleUsernameChange(e.target.value)}></input>
                {/* below is a text type of input that will 'onChange' how the method is wanting
                to change according to return line and what is typed in the input box for password */}
                <input type= 'text' onChange={e => this.handlePasswordChange(e.target.value)}></input>
                {/* below is letting React know when clicked, to run 'handleLogin' method above */}
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}