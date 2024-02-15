import Image from 'next/image'
import React from 'react'

type CardProps = {
    header: string
}

const Card = ({header}: CardProps) => {
  return (
    <div className='flex flex-col bg-red-400 w-1/4'>
        <h1 className='text-2xl font-bold'>{header}</h1>
        <Image 
            src="/rhyssbold.jpg"
            alt="bold ni rhyss"
            width={500}
            height={500}
        />
        <p className='text-neutral-300'>Free nudes ni rhyss</p>
    </div>
  )
}

export default Card