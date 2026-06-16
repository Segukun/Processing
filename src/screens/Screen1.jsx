import React from 'react'
import Sketch from 'react-p5'

const Screen1 = () => {
  const setup = (p5, canvasParentRef) => {
    const width = canvasParentRef.offsetWidth > 0 ? canvasParentRef.offsetWidth : 350
    const height = canvasParentRef.offsetHeight > 0 ? canvasParentRef.offsetHeight : 600

    p5.createCanvas(width, height).parent(canvasParentRef)
    p5.background(20)
    p5.noStroke()
  }

  const draw = (p5) => {
    const parent = p5.canvas.parentElement
    const width = parent.offsetWidth > 0 ? parent.offsetWidth : 350
    const height = parent.offsetHeight > 0 ? parent.offsetHeight : 600

    if (p5.width !== width || p5.height !== height) {
      p5.resizeCanvas(width, height)
      p5.background(20)
    }

    p5.fill(20, 15)
    p5.rect(0, 0, p5.width, p5.height)

    const velocidad = p5.dist(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY)
    const diametro = p5.map(velocidad, 0, 100, 10, 90, true)
    const rojo = p5.map(p5.mouseX, 0, p5.width, 100, 255)
    const verde = p5.map(p5.mouseY, 0, p5.height, 100, 255)

    p5.fill(rojo, verde, 255, 200)
    p5.ellipse(p5.mouseX, p5.mouseY, diametro, diametro)
  }

  const windowResized = (p5) => {
    const parent = p5.canvas.parentElement
    const width = parent.offsetWidth > 0 ? parent.offsetWidth : 350
    const height = parent.offsetHeight > 0 ? parent.offsetHeight : 600

    p5.resizeCanvas(width, height)
    p5.background(20)
  }

  return (
    <div className="sketch-container-fixed sketch-container-fill">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  )
}

export default Screen1
