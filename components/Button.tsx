import React from 'react'

type ButtonProps = {
    text: string
}

const Button = ({text} : ButtonProps) => {
  return (
    <button className='px-4 py-2 bg-gray-950 text-white rounded-full'>
        {text}
    </button>
  )
}

export default Button