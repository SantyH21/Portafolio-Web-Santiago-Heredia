import React from 'react'

export const StarBackground = () => {

  const [stars, setStars] = React.useState([])
  const [meteors, setMeteors] = React.useState([])

  //generador de estrellas para el fondo 
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000) // Ajusta la densidad de estrellas según el tamaño de la pantalla
    const newStars = []

    for (let i = 0; i < numberOfStars; i++) { // Genera estrellas con propiedades aleatorias
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)
  }

  React.useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => { // Regenera las estrellas al redimensionar la ventana
      generateStars();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  //generador de estrellas para el fondo 
  const generateMeteors = () => {
    const numberOfMeteors = 6 // Ajusta la cantidad de meteoros
    const newMeteors = []

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({ // Genera meteoros con propiedades aleatorias
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100 + 20, 
        y: Math.random() * 70 - 10, 
        delay: Math.random() * 15 + 's',
        animationDuration: Math.random() * 3 + 3
      })
    }
    setMeteors(newMeteors)
}
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0 animate-fade-in'>

      {stars.map((star) => ( // Mapea las estrellas y las posiciona en el fondo
        <div key={star.id} className='star animate-pulse-subtle' 
        style={{
          width: star.size + 'px',
          height: star.size + 'px',
          top: star.y + '%',
          left: star.x + '%',
          oppacity: star.oppacity,
          animationDuration: star.animationDuration + 's',
        }} />
      ))}

      {meteors.map((meteor) => ( // Mapea los meteoros y las posiciona en el fondo
        <div key={meteor.id} className='meteor animate-meteor' 
        style={{
          width: meteor.size * 50 + 'px',
          height: meteor.size + 'px',
          top: meteor.y + '%',
          left: meteor.x + '%',
          //animationDelay: meteor.delay,
          animationDuration: meteor.animationDuration + 's',
        }} />
      ))}

    </div>
  )
}
