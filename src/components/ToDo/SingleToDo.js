import React from 'react'

export default function SingleToDo(props) {
    //deconstruct
    const {name, done} = props.todo
  return (
    <div className=" col-md-5 m-4">
        <h3>{name} :
        {done == true &&
            <h3 className='text-success'>Completed!</h3>
        } 
        {done !== true &&
            <h3 className='text-danger'>not-completed</h3>
        } 
        </h3>  
    </div>
  )
}
