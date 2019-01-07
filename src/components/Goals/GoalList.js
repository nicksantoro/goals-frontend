import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { selectGoal } from '../../actions';

class GoalList extends Component {

  renderList() {
    return this.props.goals.map((goal) => {
      return (
        <div key={goal.goal}>
          <ListGroup>
            {/* <ListGroupItem color="success">{goal.goal}</ListGroupItem> */}
            {/* <ListGroupItem color="info">{goal.goal}</ListGroupItem> */}
            {/* <ListGroupItem color="warning">{goal.goal}</ListGroupItem> */}
            <ListGroupItem color="danger">{goal.goal}
              <Button onClick={() => this.props.selectGoal(goal)} color="primary">Deadline</Button>{' '}
            </ListGroupItem>
          </ListGroup>

        </div>
      )
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { goals: state.goals }
}

export default connect(mapStateToProps, { selectGoal: selectGoal })(GoalList)
