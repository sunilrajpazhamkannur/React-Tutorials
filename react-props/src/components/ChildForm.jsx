import React from 'react'

const ChildForm = ({message,count}) => {
    // destructured props
  return (
    <div>
        <h1>Child Form</h1>
        <hr/>
        <h2>Mesage: {message}</h2>
        <h2>Count: {count}</h2>
    </div>
  )
}

export default ChildForm

