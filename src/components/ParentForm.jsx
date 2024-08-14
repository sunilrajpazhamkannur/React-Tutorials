import React from 'react'
import ChildForm from './ChildForm';
import ChildForm2 from './ChildForm2';

const ParentForm = () => {
    const msg='Hello!! from parent';
    const nos=5;

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Parent Component</h1>
        <ChildForm message={msg} count={nos}/>
        <ChildForm2 message={msg} count={nos}/>   
        


    </div>
  )
}

export default ParentForm