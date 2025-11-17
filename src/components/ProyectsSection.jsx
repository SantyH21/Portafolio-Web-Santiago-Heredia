import { ExternalLink, GithubIcon, LucideGithub } from 'lucide-react';
import React from 'react'

const proyectos = [
    {
        id: 1,
        title: "Martina Cespedes Backend",
        description: "Proyecto de backend para gestionar datos de usuarios, stock de productos y materia prima de una fabrica de Gin.",
        imageUrl: "proyectsPics/BackendMartinaC.png",
        tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        gitHubUrl: "https://github.com/SantyH21/Martina-Cespedes/tree/dev",
        demoUrl: "#",
    },

    {
        id: 2,
        title: "Portafolio Personal Web",
        description: "Proyecto de Portafolio Web Personal para mostrar mis habilidades y proyectos como desarrollador. desarrollado con React y Tailwind CSS.",
        imageUrl: "proyectsPics/portafolio.png",
        tags: ["Node.js", "React", "Tailwind CSS"],
        gitHubUrl: "https://github.com/SantyH21/Portafolio-Web-Santiago-Heredia",
        demoUrl: "#",
    },

    {
        id: 3,
        title: "Tesis Final de Carrera que buscaba crear un sistema de alerta temprana de abandono escolar, a traves de datos recolectados brindados por el ministerio de educacion.",
        description: "Tesis final que consistia",
        imageUrl: "proyectsPics/TesisFinal.png",
        tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "PyCaret", "GoogleColab"],
        gitHubUrl: "https://drive.google.com/drive/u/2/folders/1nUNoAl4pgiqL0fo4vBfzjY8BcZ9vQyAk",
        demoUrl: "#",
    },

    {
        id: 4,
        title: "Gestor de recetas de cocina",
        description: "Gestor de recetas de cocina desarrollado con React, CSS y JavaScript, que permite a los usuarios buscar, agregar y organizar recetas de manera sencilla.",
        imageUrl: "proyectsPics/recetasCocina.png",
        tags: ["React", "CSS" , "JavaScript"],
        gitHubUrl: "https://github.com/SantyH21/Recetas-De-Cocina",
        demoUrl: "#",
    },

    {
        id: 5,
        title: "Analizador Lexico / proyecto de compiladores / facultad",
        description: "Proyecto de analizador léxico desarrollado en Python, que procesa código fuente para identificar tokens y estructuras sintácticas.",
        imageUrl: "proyectsPics/analizadorLexico.png",
        tags: ["Python"],
        gitHubUrl: "https://github.com/SantyH21/Analizador-Lexico",
        demoUrl: "#",
    },

    {
        id: 6,
        title: "Analizador Sintactico / proyecto de compiladores / facultad",
        description: "Proyecto de analizador sintactico desarrollado en Python, que procesa código fuente para identificar tokens y estructuras sintácticas.",
        imageUrl: "proyectsPics/analizadorSintactico.png",
        tags: ["Python"],
        gitHubUrl: "https://github.com/SantyH21/Analizador-Sintactico",
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
                                    <a href={proyecto.gitHubUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'><GithubIcon size={20} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a href="https://github.com/SantyH21" target="_blank" className='cosmic-button opacity-70 w-fit flex items-center mx-auto gap-2'>Mi cuenta de GitHub <LucideGithub size={16} /></a>
                </div>
            </div>
        </section>
    )
}
