import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // add the item
    this.props.add(this.state.name)
    // reset to default value in the state
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          inline
          label='Task'
          placeholder="Add a task"
          required
          name='name'
          value={name}
          onChange={this.handleChange}
        />

        <Form.Button
          size='small'
          color='green'
        >
          Submit
        </Form.Button>
        <hr />
      </Form>
    )
  }
}

export default ItemForm;