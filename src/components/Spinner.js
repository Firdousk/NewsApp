import React from 'react'
import loading from './Spinner.gif'
const Spinner =()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading' width="100" height="100"/>
      </div>
    )
  
}
export default Spinner