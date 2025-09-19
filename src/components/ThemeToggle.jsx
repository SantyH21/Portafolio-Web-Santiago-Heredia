import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => { // Componente para alternar entre temas claro y oscuro
    const [isDarkTheme, setDarkTheme] = React.useState(false);

    React.useEffect(() => { // Verifica el tema almacenado en localStorage al cargar el componente
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkTheme(true);
            document.documentElement.classList.add('dark');
        }else {
            setDarkTheme(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

        const toggleTheme = () => { // Función para alternar el tema y actualizar localStorage

            if (isDarkTheme) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            setDarkTheme(!isDarkTheme);
        }

        return ( //boton para alternar el tema con iconos de sol y luna
            <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
            {isDarkTheme ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-600' />}</button>
        )
    }
