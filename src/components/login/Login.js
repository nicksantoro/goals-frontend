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

      <div className="row">

        <div className="col-2">

        </div>

        <div className="col-8">
          <Container className="pb-5 mt-5 bg-light border border-white shadow-sm p-3 mb-5 bg-white rounded">
            <i id="bird" className="fal fa-kiwi-bird fa-3x text-primary pt-4 pb-1"></i>
            <h5 className="mt-5 text-center">Chirpy</h5>
            <Form onSubmit={this.handleLogin} >
              <FormGroup className="text-center mt-3">
                <Label for="exampleEmail">Email</Label>
                <Input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                <Label for="examplePassword">Password</Label>
                <Input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <div className="text-center">
                <Button type="submit" className="bg-primary">Sign in</Button>
              </div>
            </Form>
            {this.props.loginError ? <Alert color="warning">
              {this.props.error}
            </Alert> : null}
            <div className="text-center mt-4">
              <Button outline color="primary">Sign up</Button>{' '}
            </div>

          </Container>

        </div>

        <div className="col-2">

        </div>

      </div>


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
