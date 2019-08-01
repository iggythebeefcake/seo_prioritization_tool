import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ItemForm from './components/Items/ItemForm';
import axios from 'axios';
import ItemList from './components/Items/ItemList';

class App extends Component {
  state = { items: [] }

  // before render
  componentDidMount() {
    // grab all the tasks
    axios.get('/api/tasks')
      .then( res => {
        this.setState({ items: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addTask = (name) => {
    // api call to add the task to the backend
    axios.post('/api/tasks', { name } )
      .then( res => {
    // add to the state
        const { items } = this.state
        this.setState({ items: [...items, res.data ] })
      })
  }

  updateItem = (id) => {
    //api call to update the item in the backend

    axios.put(`/api/tasks/${id}`)
      .then( res => {
        const items = this.state.items.map( i => {
          if (i.id === id)
            return res.data
          return i
        })
    //update the state to the new item
        this.setState({ items })
      })
  }

  deleteItem = (id) => {
    // api call to delete in the backend
    axios.delete(`/api/tasks/${id}`)
      .then( res => {
    // remove item in the state
        const { items } = this.state
        this.setState({ items: items.filter( i => i.id !== id )})
      })
  }

  render() {
    const { items } = this.state
    return (
      <Container>
        <ItemForm add={this.addTask} />
        <ItemList 
          items={items} 
          update={this.updateItem} 
          deleteItem={this.deleteItem}
        />
      </Container>
    )
  }
}

export default App;
