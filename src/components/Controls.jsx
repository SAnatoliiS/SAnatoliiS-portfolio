import React from 'react'
import { sample } from 'lodash'

const Controls = ({ items, chooseItem }) => {
  const onChoose = () => {
    const chosenItem = sample(items.map(item => item.id))
    chooseItem(chosenItem)
  }
  return (
    <div>
      <button onClick={onChoose}>CHOOSE</button>
      <button>ADD</button>
    </div>
  )
}

export default Controls
