import React from 'react'
import Sketch from 'react-p5'

const Screen3 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
    p5.background(255)
    p5.noFill()
    p5.stroke(0)
    p5.strokeWeight(2)

    // Primero el mas grande
    p5.ellipse(200, 200, 300, 300)

    // Luego el mediano
    p5.ellipse(200, 200, 200, 200)

    // Al final el pequeno, el que va arriba de los otros dos
    p5.ellipse(200, 200, 100, 100)
  }

  return (
    <div className="sketch-container-fixed sketch-container-center">
      <Sketch setup={setup} />
    </div>
  )
}

export default Screen3
