import React from 'react'
import Button from './Button'
import Card from './Card'
import { PRODUCTS } from '@/constants'

const Hero = () => {
  return (
    <section className='bg-teal-600 h-screen flexCenter'>
        {/* Left Side */}
        <div className='w-1/2 flex flex-col gap-16'>
            <h1 className='font-bold text-8xl'>
                Welcome to Rhyss's Bold Website
            </h1>
            <p>
                Free nudes for everyone. If you like rhyss this is the best place for you.
            </p>
            <Button 
                text='Sign up for free nudes ni rhyss'
            />
        </div>

        {/* Right Side */}
        <div className='w-1/2 flex flex-wrap gap-2'>
            {/* => is same with return */}
            {/* Fetch sa database then gi store ang data sa PRODUCTS (array) */}
            
            {PRODUCTS.map((i) => (
                <Card 
                    header={i.title}
                />
            ))}


        </div>

    </section>
  )
}

export default Hero