import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logOutUser } from '../../actions'
import { Icon } from 'semantic-ui-react'

import './NavBar.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

class NavBar extends Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = () => {
    this.props.logOutUser()
  }

  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand style={{ color: "white" }} href="/">Chirpy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {this.props.isLoggedIn ? (<><NavItem>

                {/* <NavLink style={{ color: "white" }} href="file:///Users/nicholassantoro/Desktop/d3-q4/index.html">
                  Goals
                </NavLink> */}



                <NavLink style={{ color: "white" }} href="/profile">
                  <Icon name="user circle outline white large" />
                  {this.props.user.name}
                </NavLink>
              </NavItem>
                <NavItem>
                  <NavLink style={{ color: "white" }} onClick={this.handleClick} href="">Sign Out</NavLink>
                </NavItem> </>) : (<NavItem>
                  <NavLink style={{ color: "white" }} href="/login">Login</NavLink>
                </NavItem>
                )}

            </Nav>
          </Collapse>
        </Navbar>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("nav", state)
  return { user: state.users.user, isLoggedIn: state.users.isLoggedIn };
}

const mapDispatchToProps = (dispatch) => {
  return { logOutUser: bindActionCreators(logOutUser, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
