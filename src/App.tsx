import React from 'react'
import './styles/App.css'
import StartButton from './components/StartButton'

function App() {
    return (
        <div className="app-container">
            <div className="content-wrapper">
                <h1>Stack-a-Punch</h1>
                <StartButton />
            </div>
        </div>
    )
}

export default App
