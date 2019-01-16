import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Card, Icon, Image, Loader, Transition, Button, Modal, Header } from 'semantic-ui-react'
import Moment from 'react-moment'
import { deleteChallenge, updateChallenge, addLike } from '../../actions/challengeActions'


import UpdateEvent from './UpdateEvent'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>

)

class ChallengeDetail extends Component {

  state = {
    visible: true
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
    this.props.addLike(this.props.event.id)
  }

  handleDelete = () => {
    this.props.deleteChallenge(this.props.event.id)
  }

  handleUpdate = (eventUpdates) => {

    this.props.updateChallenge(this.props.event.id, challengeUpdates)
  }



  render() {



    let { title, description, image, date_time, likes } = this.props.event;
    console.log(likes)

    return !this.props.event ? <Loader active /> : (

      <Card fluid raised link className="margin">
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <Moment className="datetime" format="MMM D YYYY HH:mm" withTitle>{date_time}</Moment> <br />
            <Moment fromNow>{date_time}</Moment>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Transition animation="pulse" duration={200} visible={this.state.visible}>
            <Icon size="big" onClick={this.toggleVisibility} id="heart" name='heart' />
          </Transition>

          <Button basic color='black' content='Black'>{likes}</Button>

          <Button onClick={this.handleDelete} inverted color="red" ><Icon name='delete' />Delete</Button>

          <Modal basic trigger={<Button inverted color="violet">Edit Event</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>

              <UpdateEvent event={this.props.event} onEditSubmit={this.handleUpdate} />

            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteChallenge: bindActionCreators(deleteChallenge, dispatch),
    updateChallenge: bindActionCreators(updateChallenge, dispatch),
    addLike: bindActionCreators(addLike, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ChallengeDetail)