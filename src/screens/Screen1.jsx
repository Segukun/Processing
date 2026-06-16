import React from 'react'
import Sketch from 'react-p5'

const ScreenDrawing = () => {
  const setup = (p5, canvasParentRef) => {
    const width = canvasParentRef.offsetWidth > 0 ? canvasParentRef.offsetWidth : 350
    const height = canvasParentRef.offsetHeight > 0 ? canvasParentRef.offsetHeight : 600

    p5.createCanvas(width, height).parent(canvasParentRef)
    p5.background(20) // Fondo oscuro para que resalten los colores
    p5.noStroke() // Sin bordes para un look más limpio
  }

  const draw = (p5) => {

    // 1. Efecto rastro (limpieza parcial del fotograma anterior)
    p5.fill(20, 15)
    p5.rect(0, 0, p5.width, p5.height)

    // 2. Calcular velocidad del mouse basándonos en la distancia entre el fotograma anterior y el actual
    const velocidad = p5.dist(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY)

    // 3. Mapear la velocidad al tamaño del círculo (más rápido = más grande)
    const diametro = p5.map(velocidad, 0, 100, 10, 90, true)
    // Nota: el 'true' final evita que el tamaño supere 90 si mueven el mouse muy rápido

    // 4. Mapear la posición X del mouse para cambiar el color dinámicamente (Rojo a Verde)
    const rojo = p5.map(p5.mouseX, 0, p5.width, 100, 255)
    const verde = p5.map(p5.mouseY, 0, p5.height, 100, 255)

    // 5. Dibujar la figura interactiva
    p5.fill(rojo, verde, 255, 200)
    p5.ellipse(p5.mouseX, p5.mouseY, diametro, diametro)
  }

  return (
    <div className="sketch-container-fixed">
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}

export default ScreenDrawing
