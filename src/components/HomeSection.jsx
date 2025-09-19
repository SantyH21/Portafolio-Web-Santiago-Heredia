import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HomeSection = () => {
  return (
    <section id="home" className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='containter max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hola, mi nombre es </span>
                    <span className='opacity-0 text-primary animate-fade-in-delay-1'>Santiago </span>
                    <span className='opacity-0 text-primary animate-fade-in-delay-2'>Heredia</span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    Soy un desarrollador web full-stack con experiencia en la creación de aplicaciones web modernas y receptivas. Me especializo en JavaScript, React, Node.js.
                </p>
                <div>
                    <a href='#projects' className='cosmic-button opacity-0 animate-fade-in-delay-4'>Mis proyectos</a>
                </div>
            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'>Desliza</span>
            <ArrowDown className='h-5 w-5 text-primary'/>
        </div>
    </section>
  )
}
