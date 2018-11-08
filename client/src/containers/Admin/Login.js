import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/';

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    success: false
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.login.isAuth) {
      this.props.history.push('/user')
    }
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(actionCreators.loginUser(this.state))
  }

  render() {
    const { user } = this.props;
    return (
      <div className="rl_container">
        <form onSubmit={this.onSubmitForm}>
          <h2>Log in here</h2>

          <div className="form_element">
            <input 
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form_element">
            <input 
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <button type="submit">Log in</button>

          <div className="error">
            {
              user.login ?
                <div>{user.login.message}</div>
                : null
            }
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(Login);