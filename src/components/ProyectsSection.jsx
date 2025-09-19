import { ExternalLink, GithubIcon, LucideGithub } from 'lucide-react';
import React from 'react'

const proyectos = [
    {
        id: 1,
        title: "Martina Cespedes Backend",
        description: "Proyecto de backend para gestionar datos de usuarios y productos.",
        imageUrl: "proyectsPics/portafolio.png",
        tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        gitHubUrl: "#",
        demoUrl: "#",
    },

    //entre llave agregar mas proyectos{ 
];

export const ProyectsSection = () => {
    return (
        <section id="projects" className='py-24 px-4 relative'>

            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Mis <span className='text-primary'>Proyectos</span>
                </h2>

                <p className='text-center text-muted*foreground mb-12 max-w-2xl mx-auto'>
                    Aquí encontrarás algunos de los proyectos en los que he trabajado, demostrando mis habilidades y experiencia en desarrollo.
                </p>

                <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {proyectos.map((proyecto, key) => (
                        <div key={key} className='group bf-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div>
                                <img src={proyecto.imageUrl} alt={proyecto.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mb-4' />
                            </div>

                            <div>
                                <h3 className='text-xl font-semibold mb-1'>{proyecto.title}</h3>
                                <p className='text-muted-foreground text-sm'>{proyecto.description}</p>
                            </div>

                            <div className='p-4'>
                                <div className='flex flex-wrap gap-2'>
                                    {proyecto.tags.map((tag, key) => (
                                        <span key={key} className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/15 text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>

                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex space-x-3'>
                                    <a href={proyecto.demoUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20} /></a>
                                    <a href={proyecto.gitHubUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'><GithubIcon size={20}/></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a  href= "https://github.com/SantyH21" target="_blank" className='cosmic-button opacity-70 w-fit flex items-center mx-auto gap-2'>Mi cuenta de GitHub <LucideGithub size={16}/></a>
                </div>
            </div>
        </section>
    )
}
