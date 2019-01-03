import React from 'react'
import { reduxForm, Field } from 'redux-form'

const NewItem = (props) => {
  const addItem = (values) => {
    console.log('addItem', values)
    props.addItem(values)
    props.reset()
  }
  const { handleSubmit } = props
  return (
    <div>
      <form onSubmit={handleSubmit(addItem)}>
        <Field name="title" required component="input" placeholder="Title*" type="text" />
        <Field name="info" component="input" placeholder="Additional Info" type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'newItem'
})(NewItem)
