import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Goal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {this.props.isLoggedIn ? (<><NavItem>
                <NavLink href="">{this.props.user.user.name}</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink href="">Sign Out</NavLink>
                </NavItem> </>) : (<NavItem>
                  <NavLink href="/login">Login</NavLink>
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
  console.log(state)
  return { user: state.users.user, isLoggedIn: state.users.isLoggedIn };
}

export default connect(mapStateToProps, null)(NavBar)
