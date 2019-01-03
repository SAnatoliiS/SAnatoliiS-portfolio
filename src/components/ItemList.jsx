import React from 'react'
import Item from '../containers/Item'

const ItemList = ({ resetList, items }) => {
  const onResetList = () => {
    resetList();
  }
  return (
    <div>
      <button onClick={onResetList}>reset</button>
      {
        items.map(item => <Item key={item.id} item={item} />)
      }
    </div>
  )
}

export default ItemList
