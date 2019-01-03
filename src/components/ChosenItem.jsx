import React from 'react'
import Modal from 'react-modal'

const ChosenItem = ({ chosenItem: { title, info }, unChoose }) => {
  const onUnChoose = () => {
    unChoose();
  }
  return (
    <Modal
      isOpen={!!title}
      onRequestClose={onUnChoose}
    >
      <h3>{title}</h3>
      <p>{info}</p>
      <button onClick={onUnChoose}>Okay</button>
    </Modal>
  
  )
}

export default ChosenItem;
