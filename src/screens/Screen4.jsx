import React from 'react'
import Sketch from 'react-p5'

const Screen4 = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef)
        p5.background(255)
        p5.noFill()
        p5.stroke(0)
        p5.strokeWeight(2)

        // Superior izquierda
        p5.rect(0, 0, 50, 50)

        // Superior derecha
        p5.rect(350, 0, 50, 50)
        
        // Inferior izquierda
        p5.rect(0, 350, 50, 50)

        // Inferior derecha
        p5.rect(350, 350, 50, 50)
    }

    return (
        <div className="sketch-container-fixed sketch-container-center">
            <Sketch setup={setup} />
        </div>
    )
}

export default Screen4
