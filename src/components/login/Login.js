import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../../actions';

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.userLogin(this.state);
  }

  render() {
    return (
      <Container className="mt-5">
        <h3>Login</h3>
        <Form onSubmit={this.handleLogin}>
          <FormGroup >
            <Label for="exampleEmail">Email</Label>
            <Input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            <Label for="examplePassword">Password</Label>
            <Input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        {this.props.loginError ? <Alert color="warning">
          {this.props.error}
        </Alert> : null}

      </Container>
    )
  }
}

// store
const mapStateToProps = (state) => {
  console.log(state)
  return { loginError: state.users.loginError, error: state.users.error }
}

// actions
const mapDispatchToProps = (dispatch) => {
  return { userLogin: bindActionCreators(userLogin, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
