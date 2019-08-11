import React from 'react';
import { Checkbox, Button, Icon, Label } from 'semantic-ui-react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
    display: 'inline-block',
    padding: '10px'
  },
  row: {
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '10px'
  },
  align: {
    display: 'inline-block',
    float: 'absolute'
  }
}

const Item = ({ id, name, complete, update, deleteItem }) => (
  <div>
    <div>
      <Checkbox 
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={ complete ? styles.complete : styles.row }>
        <h1>{name}</h1>
      </div>
      <div style={ styles.row }>
        <Button 
          compact
          color='red'
          onClick={() => deleteItem(id)}
          size='tiny'
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
)

export default Item;