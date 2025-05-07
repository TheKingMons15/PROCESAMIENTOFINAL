import React, { useRef, useState } from 'react'

type Point = { x: number, y: number }

const MapImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [points, setPoints] = useState<Point[]>([])

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const rect = imageRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)

    const newPoint = { x, y }
    setPoints(prev => [...prev, newPoint])
    console.log(`Coordenada clic: [${x}, ${y}]`)
  }

  return (
    <div className="relative inline-block">
      <img
        ref={imageRef}
        src="/assets/images/campus-map.jpg" // coloca aquí tu ruta
        alt="Mapa"
        onClick={handleClick}
        className="max-w-full h-auto"
      />
      {/* puntos rojos en cada coordenada */}
      {points.map((point, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* muestra las coordenadas */}
      <div className="mt-4 font-mono">
        {points.map((p, i) => (
          <div key={i}>Punto {i + 1}: ({p.x}, {p.y})</div>
        ))}
      </div>
    </div>
  )
}

export default MapImage
