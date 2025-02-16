import { useState } from 'react';
import React from 'react';
import './styles/App.css';
import StartButton from './components/StartButton';
import MachineScreen from './components/MachineScreen';

function App() {
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div className="app-container">
            <div className="content-wrapper">
                {!gameStarted ? (
                    <>
                        <h1>Stack-a-Punch</h1>
                        <StartButton onStart={() => setGameStarted(true)} />
                    </>
                ) : (
                    <MachineScreen/>
                )}
            </div>        
        </div>
    );
}

export default App;
