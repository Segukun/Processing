import React from 'react'
import Sketch from 'react-p5'

const Screen5 = () => {
  // Guarda cual luz esta prendida ahora.
  let activeLight = 'green'

  // Guarda en que momento empezo la luz actual
  let startedAt = 0

  const durations = { //las duraciones son en milisegundos ᓚᘏᗢ
    green: 3000,
    yellow: 1500,
    red: 3000,
  }

  const nextLight = { //este es el orden de las luces que luego se usara para cambiar de luz
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
    p5.textAlign(p5.CENTER, p5.CENTER)
    startedAt = p5.millis()
  }

  const draw = (p5) => {
    // Si ya paso el tiempo de la luz actual, avanza a la siguiente
    if (p5.millis() - startedAt >= durations[activeLight]) {
      activeLight = nextLight[activeLight]
      startedAt = p5.millis()
    }

    p5.background(245)

    drawTrafficLight(p5)
    drawPedestrianButton(p5)
  }

  const mousePressed = (p5) => {
    // Revisa si el click cayo dentro del cuadrado del boton
    const insideButton =
      p5.mouseX >= 305 &&
      p5.mouseX <= 365 &&
      p5.mouseY >= 300 &&
      p5.mouseY <= 360

    // Si el peaton apreta el boton, fuerza el semaforo a rojo
    if (insideButton && activeLight !== 'red') {
      activeLight = 'red'
      startedAt = p5.millis()
    }
  }

  const drawTrafficLight = (p5) => {
    p5.fill(35)
    p5.stroke(0)
    p5.strokeWeight(3)
    p5.rect(135, 40, 130, 250, 20)

    drawLight(p5, 200, 90, 'red', activeLight === 'red')
    drawLight(p5, 200, 165, 'yellow', activeLight === 'yellow')
    drawLight(p5, 200, 240, 'green', activeLight === 'green')
  }

  const drawLight = (p5, x, y, color, isOn) => {
    // Guarda los colores en una tabla para no repetir fill muchas veces
    const lightColors = {
      red: [230, 45, 45],
      yellow: [245, 205, 45],
      green: [45, 190, 95],
    }

    const [r, g, b] = lightColors[color]

    if (isOn) {
      p5.fill(r, g, b)
    } else {
      p5.fill(80)
    }

    p5.stroke(15)
    p5.strokeWeight(2)
    p5.ellipse(x, y, 58, 58)
  }

  const drawPedestrianButton = (p5) => {
    p5.fill(255)
    p5.stroke(0)
    p5.strokeWeight(2)
    p5.rect(305, 300, 60, 60, 8)

    p5.fill(0)
    p5.noStroke()
    p5.textSize(11)
    p5.text('BOTON', 335, 330)
  }

  return (
    <div className="sketch-container-fixed sketch-container-center">
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
    </div>
  )
}

export default Screen5
