import React from 'react'

const Button = ({handleClick, visible}) => {
    return(
    <button onClick={handleClick}>{visible ? 'hide' : 'show'}</button>
  )
}
export default Button