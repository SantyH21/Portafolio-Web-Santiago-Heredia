import { ArrowUpIcon } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-12 px-4 relative mt-12 pt-8 flex flex-wrap justify-center items-center'>
        <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()}
        </p>

        <a href='#' className='rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUpIcon/>
        </a>
    </footer>
)
}
