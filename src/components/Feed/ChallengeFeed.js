import React, { Component, Fragment } from 'react'
import { Segment, List, Image, Button, Container, Rating, Modal, Header, Icon } from 'semantic-ui-react'
import FadeIn from 'react-fade-in'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markCompleted } from '../../actions/challengeActions'
import * as challengeActions from '../../actions/challengeActions'


class ChallengeFeed extends Component {

  handleClick = (id) => {
    this.props.markCompleted(id)
  }

  joinChallenge = (id) => {
    return (event) => {
      // id - challenge id
      this.props.challengeActions.joinChallenge(id);
    }
  }

  render() {
    console.log(this.props.challenges)
    return !this.props.challenges ? null : (

      <Container >
        <Segment>
          <FadeIn>
            <List selection animated divided verticalAlign='middle' relaxed size="massive">
              {
                this.props.challenges.map(challenge =>
                  (
                    <Fragment>
                      <Modal style={{ height: "50%" }} trigger={<List.Item style={{ position: "relative" }} >
                        <Image avatar size="small" src={challenge.image} />
                        <List.Content >
                          <List.Description style={{ fontSize: ".75em" }}>
                            {challenge.username}
                          </List.Description>
                          <List.Header >{challenge.goal}</List.Header>
                          <List.Description>
                            {challenge.description}
                          </List.Description>
                          <List.Description style={{ fontSize: ".5em" }}>
                            Start Date:{' '}
                            <Moment toNow>
                              {challenge.start_date}
                            </Moment>
                          </List.Description>
                          <List.Description style={{ fontSize: ".5em" }}>
                            End Date:{' '}
                            <Moment toNow>
                              {challenge.end_date}
                            </Moment>
                          </List.Description>
                          <List.Description style={{ fontSize: ".75em" }}>
                            Difficulty:{' '}<Rating defaultRating={challenge.rank} maxRating={10} disabled />
                          </List.Description>
                          <div style={{ position: "absolute", right: 10, top: "35%" }}>
                            {challenge.completed === true ?
                              <i class="fal fa-flag-checkered fa-2x"></i> :
                              // <Icon name="flag checkered big teal" /> :
                              null
                            }
                          </div>
                        </List.Content>
                      </List.Item>}>
                        <Modal.Header>{challenge.username}</Modal.Header>
                        <Modal.Content image>
                          <Image wrapped size='medium' src={challenge.image} />
                          <Modal.Description>
                            <Header>{challenge.goal}</Header>
                            <p>{challenge.description}</p>
                            Difficulty:{' '}<Rating defaultRating={challenge.rank} maxRating={10} disabled />
                            <br>
                            </br>
                            <div style={{ marginTop: "2em" }}>
                              <Button.Group vertical widths={9}>
                                <Button positive disabled={challenge.completed || challenge.users_id !== this.props.user.id ? true : false} onClick={() => this.handleClick(challenge.id)}>Completed?</Button>

                                <Button onClick={this.joinChallenge(challenge.id)} primary disabled={challenge.users_id === this.props.user.id ? true : false}>Join</Button>

                              </Button.Group>
                            </div>
                            <br />
                            <br />
                            {challenge.completed === true ?
                              <div style={{ textAlign: "center" }}>
                                <i class="fal fa-flag-checkered fa-3x"></i> </div> :
                              null
                            }

                          </Modal.Description>

                        </Modal.Content>
                      </Modal>

                    </Fragment>
                  )
                )}
            </List>
          </FadeIn>
        </Segment>
      </Container>

    )
  }

}

const mapStateTopProps = (state) => {
  return { user: state.users.user }
}

const mapDispatchToProps = dispatch => {
  return {
    markCompleted: bindActionCreators(markCompleted, dispatch)
    // challengeActions: bindActionCreators(challengeActions, dispatch)
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ChallengeFeed)