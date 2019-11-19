import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.props.history.push('/About');
    }

render(){
return(
  <div>
    <div class="login-box">
      <h1>Login</h1>

      <div class="textbox">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>

      <div class="textbox">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" color="white" />
      </div>

      <input type="button" class="btn" value="Sign in" onClick = {this.handleClick} />
    </div>
  </div>
);
}
}

export default Login;
