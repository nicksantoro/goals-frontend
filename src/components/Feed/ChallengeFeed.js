import React, { Component, Fragment } from 'react'
import { List, Image, Button, Container, Rating, Modal, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FadeIn from 'react-fade-in'
import Moment from 'react-moment'
import ChallengeModal from './ChallengeModal'

class ChallengeFeed extends Component {
  render() {
    console.log(this.props.challenges)
    return !this.props.challenges ? null : (

      <Container>
        <FadeIn>
          <List selection animated divided verticalAlign='middle' relaxed size="massive">
            {
              this.props.challenges.map(challenge =>
                (
                  <Fragment>
                    <Modal style={{ height: "50%" }} trigger={<List.Item>
                      <Image avatar src={challenge.image} />
                      <List.Content>
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
                          <Button basic>Join</Button>
                        </Modal.Description>

                      </Modal.Content>
                    </Modal>

                  </Fragment>
                )
              )}
          </List>
        </FadeIn>

      </Container>

    )
  }

}

const mapStateToProps = (state) => {
  console.log(state, "map feed")
  return { challenges: state.goals.data }
}

export default connect(mapStateToProps)(ChallengeFeed)