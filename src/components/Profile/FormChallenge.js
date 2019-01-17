import { connect } from 'react-redux'
import { addChallenge } from '../../actions/challengeActions'
import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import { bindActionCreators } from 'redux';
import { Slider } from 'react-semantic-ui-range'

import "react-datepicker/dist/react-datepicker.css";

import { Button, Form, Label } from 'semantic-ui-react'

class AddChallenge extends Component {

  state = {
    goal: "",
    description: "",
    start_date: new Date(),
    end_date: new Date(),
    rank: 0,
    visible: false,
    completed: null
  }

  handleStartChange = (date) => {
    this.setState({
      start_date: date
    });
  }

  handleEndChange = (date) => {
    this.setState({
      end_date: date
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let { goal, description, start_date, end_date, rank, completed } = this.state
    let users_id = this.props.users_id
    let payload = { goal, description, start_date, end_date, rank, users_id, completed }
    this.props.addChallenge(payload)
  }
  toggleForm = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { visible } = this.state
    return (
      <div style={{ textAlign: "center" }}>

        <Button style={{ marginTop: 4, marginBottom: 30, backgroundColor: "#FF4D74", color: "white" }} onClick={this.toggleForm} content={visible ? 'Hide' : 'Show'} big >Add Challenge</Button>
        {!this.state.visible ? (null) :

          <Form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>

            <Form.Field>


              {/* <label style={{ fontSize: "2em", marginBottom: "1em" }}>Add Challenge</label> */}
              <label>Challenge Title</label>
              <input onChange={(e) => this.setState({ goal: e.target.value })} value={this.state.goal} placeholder='Challenge Title' />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description} placeholder='Description' />
            </Form.Field>
            <Form.Field>
              <label>Start Date</label>
              <DatePicker
                showTimeSelect
                selected={this.state.start_date}
                onChange={this.handleStartChange}
                dateFormat='Pp'
              />
            </Form.Field>

            <Form.Field>
              <label>End Date</label>
              <DatePicker
                showTimeSelect
                selected={this.state.end_date}
                onChange={this.handleEndChange}
                dateFormat='Pp'
              />
            </Form.Field>

            <Form.Field>
              <label>Level of Difficulty</label>
              <Slider color="red" inverted={false}
                settings={{
                  start: this.state.rank,
                  min: 0,
                  max: 10,
                  step: 1,
                  onChange: (rank) => {
                    this.setState({
                      rank
                    })
                  }
                }} />
              <Label color="red">{this.state.rank}</Label>
            </Form.Field>


            <Button style={{ marginBottom: 30, backgroundColor: "#007BFF", color: "white" }} type='submit'>Submit</Button>

          </Form>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addChallenge: bindActionCreators(addChallenge, dispatch) }
}
export default connect(null, mapDispatchToProps)(AddChallenge)
