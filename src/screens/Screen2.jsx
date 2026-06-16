import React from 'react'
import Sketch from 'react-p5'

const Screen2 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
    p5.background(255)
    p5.stroke(0)
    p5.strokeWeight(2)

    // Linea Horizontal a mitad de Y
    p5.line(0, 200, 400, 200)

    // Linea Vertical a mitad de X
    p5.line(200, 0, 200, 400)
  }

  return (
    <div className="sketch-container-fixed sketch-container-center">
      <Sketch setup={setup} />
    </div>
  )
}

export default Screen2
