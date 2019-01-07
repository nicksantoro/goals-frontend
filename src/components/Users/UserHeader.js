import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions';
// import usersReducer from '../../reducers/usersReducer';

class UserHeader extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {

    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        {user.name}
      </div>

    )
  }
}

// component now has access to prop called this.prop.users
// we can do precalculuations in mapStateToProps
// abstract a lot of logic inside mapStateToProps
// maps state to props gets called with state object out of 
// redux store as argument, gets 2nd argument as well 
// referred to as own props--a reference to the props 
// that are about to be sent in component

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
