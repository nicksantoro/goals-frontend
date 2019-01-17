import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChallengeFeed from '../Feed/ChallengeFeed'
import { Container } from 'reactstrap'
import { Divider } from 'semantic-ui-react'

import './Static.css'

class Home extends Component {
  render() {
    return (
      <Container>
        <div style={{ textAlign: "center" }}>
          <img style={{ marginTop: "4em", width: "20%", height: "auto" }} src={require('./chirpy4-blue.png')} alt="Chirpy Logo" />
        </div>
        <div style={{ marginTop: "1em", marginBottom: "1em", fontSize: "1.5em" }}>Challenge Feed</div>
        <Divider />
        <ChallengeFeed challenges={this.props.challenges} />
      </Container>
    )

  }

}

const mapStateToProps = (state) => {
  return { challenges: state.goals.data }
}


export default connect(mapStateToProps)(Home)
