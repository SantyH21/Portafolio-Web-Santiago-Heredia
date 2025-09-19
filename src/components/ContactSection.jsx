import { LinkedinIcon, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export const ContactSection = () => {
  return (
    <section id="contact" className='px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>

        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Contactate <span className='text-primary'>conmigo!</span></h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Si tienes alguna pregunta o proyecto en mente, no dudes en enviarme un correo electrónico.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'> {/*seccion contacto*/}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Información de contacto</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <Mail className='h-6 w-6' />
                </div>
                <h4 className='font-medium'>Email</h4>
                <a href='santiagoheredia63@gmail.com' target='_blank' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                  santiagoheredia63@gmail.com
                </a>
              </div>

            </div>

            <div className='flex items-center space-x-4'>
              <div className='p-3 bg-primary/10 rounded-full'>
                <Phone className='h-6 w-6' />
              </div>
              <h4 className='font-medium'>Telefono</h4>
              <a href='tel:+543814171961' target='_blank' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                +54 381-4171961
              </a>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='p-3 bg-primary/10 rounded-full'>
                <MapPin className='h-6 w-6' />
              </div>
              <h4 className='font-medium'>Ubicacion</h4>
              <a href='https://maps.app.goo.gl/tHEXfu3Sn9zurnow9' target='_blank' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                Yerba Buena, Tucumán, Argentina
              </a>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='p-3 bg-primary/10 rounded-full'>
                <LinkedinIcon className='h-6 w-6' />
              </div>
              <h4 className='font-medium'>Linkedin</h4>
              <a href='https://www.linkedin.com/in/santiago-heredia-ba826a25b' target='_blank' className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                santiago-heredia
              </a>
            </div>
          </div>
        </div> {/* fin seccion contacto*/}
      </div>
    </section>
  )
}
