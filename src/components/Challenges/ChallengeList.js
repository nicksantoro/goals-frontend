import React, { Component } from 'react'
import Event from './Event'
import { connect } from 'react-redux'

class ChallengeList extends Component {

  render() {
    let { challenges } = this.props
    let challengeList = challenges.map(event => {
      return (
        <div><Event key={challenge.id} challenge={challenge} /></div>
      )
    })
    return (
      <div>
        <div className="ui fluid container" style={{ marginTop: "4em" }}>
          <div className="column">

            {challengeList}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.goals.displayedChallenges }
}

export default connect(mapStateToProps, null)(ChallengeList)