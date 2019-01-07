import React from 'react'
import { connect } from 'react-redux'

const GoalDeadline = ({ goal }) => {
  if (!goal) {
    return <div>Select a goal</div>
  }
  return (
    <div>

      <h3>Deadline For:</h3>
      <p>Goal: {goal.goal}</p>
      <p> {goal.deadline}</p>


    </div>
  )
}

const mapStateToProps = (state) => {
  return { goal: state.selectedGoal }
}

export default connect(mapStateToProps)(GoalDeadline)
