//callback.js is the child component

import React from 'react'
import { useState } from 'react';


const Callback = ({getcolor}) => { // <-Destructuring in the child component from the parent component
    const [activecolor, setActivecolor] = useState("");

    const handleChange = (e) => {
        const {value} = e.target;
        setActivecolor(value);
        getcolor(value);
    }
  return (
    <div>
      <input 
      type='text'
      id='input'
      aria-label='input'
      onChange={handleChange}
      value={activecolor}
      />
    </div>
  )
}

export default Callback
