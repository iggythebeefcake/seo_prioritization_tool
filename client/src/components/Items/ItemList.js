import React from 'react';
import Item from './Item';

const ItemList = ({ items, update, deleteItem }) => (
  <div>
    { items.map( item => 
      <Item 
        key={item.id}
        {...item}
        update={update}
        deleteItem={deleteItem}
      />
    )
    }
  </div>
)

export default ItemList;