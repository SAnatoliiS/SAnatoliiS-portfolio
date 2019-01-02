import React from 'react'
import { reduxForm, Field } from 'redux-form'

const AddingItem = (props) => {
  const addItem = (values) => {
    console.log('addItem', values);
  }
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(addItem)}>
        <Field name="title" required component="input" type="text" />
        <button type="submit">Add</button>
      </form>

    </div>
  )
}

export default reduxForm({
  form: 'newItem'
})(AddingItem)
