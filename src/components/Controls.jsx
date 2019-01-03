import React from 'react'
import { sample } from 'lodash'

const Controls = ({ items, chooseItem, openNewItemModal }) => {
  const onChoose = () => {
    const chosenItem = sample(items.map(item => item.id))
    chooseItem(chosenItem)
  }
  const onOpenAddModal = () => {
    openNewItemModal()
  }
  return (
    <div>
      <button onClick={onChoose}>CHOOSE</button>
      <button onClick={onOpenAddModal}>ADD</button>
    </div>
  )
}

export default Controls
