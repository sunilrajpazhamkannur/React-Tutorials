import React from 'react'

const ChildForm2 = (props) => {
    //props drilling
  return (
    <div>
        <h1>Child Form-2</h1>
        
        <hr/>

        <h2>Message : {props.message}</h2>
        <h2>Count: {props.count}</h2>
        
    </div>
  )
}

export default ChildForm2