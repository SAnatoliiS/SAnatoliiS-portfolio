import React from 'react'

const ChosenItem = ({ chosenItem: { title, info }, unChoose }) => {
  const onUnChoose = () => {
    unChoose();
  }
  return (
    !!title 
      ? <div>
          <h3>{title}</h3>
          <p>{info}</p>
          <button onClick={onUnChoose}>Okay</button>
        </div>
      : null
  )
}
export default ChosenItem;