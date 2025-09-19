import React from 'react'
import { cn } from '../lib/utils'

const skills = [ // agregar mas habilidades
    { name: 'JavaScript', level: 'Advanced', category: 'frontend' },
    { name: 'React', level: 'Advanced', category: 'frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'backend' },
    { name: 'Python', level: 'Intermediate', category: 'backend' },
    { name: 'gitHub', level: 'Intermediate', category: 'tools' },
]
const categorias = ["todas", "frontend", "backend", "tools"]; // agregar mas categorias si es necesario

export const SkillsSection = () => {

    const [categoria, setCategoria] = React.useState('todas');
    const filteredSkills = skills.filter((skill) => categoria === 'todas' || skill.category === categoria);

    return (

        <section id="skills" className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    Mis <span className='text-primary'>Habilidades</span>
                </h2>

                <div className='flex flex-wrap justify-center mb-12 gap-4'>
                    {categorias.map((cat, key) => (
                        <button key={key} onClick={() => setCategoria(cat)} className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize', categoria === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary')}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <h3 className='text-xl font-semibold mb-2 text-center'>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
