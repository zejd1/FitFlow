import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Achive Your Fitness Goals With...</p>
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Fit<span className="text-blue-400">Flow</span></h1>
            </div>
            <p className="text-sm md:text-base font-light">Get ready to crush your goals, track your progress, and transform your body with workouts that fit your schedule and style. Fitness, your way. Build your dream body with <span className="text-blue-400 font-medium">FitFlow</span>!</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}