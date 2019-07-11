import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
  
    }
}

const LoginConnect = connect(mapStateToProps, {})(Login);
export default LoginConnect;