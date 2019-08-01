import React from 'react';
import { Checkbox, Button, Icon } from 'semantic-ui-react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}

const Item = ({ id, name, complete, update, deleteItem }) => (
  <div>
    <div>
      <Checkbox 
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={ complete ? styles.complete : {} }>
        <h1>{name}</h1>
      </div>
    </div>
    <Button
      icon
      color='red'
      onClick={() => deleteItem(id)}
    >
      <Icon name='trash' />
    </Button>
  </div>
)

export default Item;