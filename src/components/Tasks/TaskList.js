import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import UserHeader from '../Users/UserHeader'

import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';



class TaskList extends Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
              <ListGroupItemText>
                {post.body}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          <UserHeader userId={post.userId} />
        </div>
      )
    })
  }

  render() {
    console.log("PROPS TASKS", this.props.posts)
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.taskList }
};

export default connect(mapStateToProps, { fetchTasks })(TaskList)
