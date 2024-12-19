import React, { useState, useEffect } from 'react'
import '../styles/StartButton.css'

function StartButton() {
    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {

        const handleKeyPress = (event: KeyboardEvent) => {
            
            if (event.key.toLowerCase() === 'f') {
                
                setIsPressed(true)
            }
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => window.removeEventListener('keydown', handleKeyPress)

    }, [])

    return (
        <div className="start-button">
        {}
        {!isPressed ? "Press F to Lock in" : "LOCKED IN"}
        </div>
    )
}

export default StartButton
