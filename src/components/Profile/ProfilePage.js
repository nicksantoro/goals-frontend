import React, { Component, Fragment } from 'react'
import { List, Image, Button, Container, Rating, Modal, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FormChallenge from './FormChallenge'
import FadeIn from 'react-fade-in'
import Moment from 'react-moment'
import ChallengeFeed from '../Feed/ChallengeFeed'
import { stat } from 'fs';

class ProfilePage extends Component {

  render() {
    console.log(this.props.user)
    return !this.props.user ? null : (
      <Container>
        <div class="ui two column  grid">

          <div class="column" style={{ marginTop: "2em" }}>
            <Image src={this.props.user.image} size='medium' circular />
          </div>


          <div class="column">
            <div style={{ marginBottom: "2em", marginTop: "2em", fontSize: "2em" }}>
              {this.props.user.username}
            </div>
            {this.props.user.bio}
          </div>



          <div class="four column centered row">
            <div class="column"></div>

            <div class="column"></div>
          </div>


        </div>

        <FormChallenge users_id={this.props.user.id} />

        <ChallengeFeed challenges={this.props.goals} />



      </Container>
    )
  }
}

const mapStateTopProps = (state) => {

  return { user: state.users.user, goals: state.users.goals }
}

export default connect(mapStateTopProps)(ProfilePage)





