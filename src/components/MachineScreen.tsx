import React, { useState, useEffect } from 'react';

const languages = ['Python', 'C++', 'Java', 'JavaScript'];
const algorithms = [
    'Merge Sort', 
    'Binary Search', 
    'Quick Sort',
    'Hash table',
    'BFS/DFS',
    'Dynamic Programming'
];

function MachineScreen() {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const [currentAlgorithm, setCurrentAlgorithm] = useState(algorithms[0]);
    const [isSpinning, setIsSpinning] = useState(true);

    // add spinning effect when component mounts
    useEffect(() => {
        let languageInterval: NodeJS.Timer;
        let algorithmInterval: NodeJS.Timer;

        if (isSpinning) {
            // spin languages every 100 ms
            languageInterval = setInterval(() => {
                setCurrentLanguage(languages[Math.floor(Math.random() * languages.length)]);
            }, 100);

            // spin algorithms every 100ms
            algorithmInterval = setInterval(() => {
                setCurrentAlgorithm(algorithms[Math.floor(Math.random() * algorithms.length)]);
            }, 100);

            // stop spinning after 3 sec
            setTimeout(() => {
                setIsSpinning(false);
            }, 3000);
        }


        // cleanup intervals when spinning stops or comp unmounts
        return () => {
            clearInterval(languageInterval);
            clearInterval(algorithmInterval);
        };
    }, [isSpinning]);



    return (
        <div className="machine-screen">
            <h1>StackaPunch Machine</h1>
            <div>{currentLanguage}</div>
            <div>{currentAlgorithm}</div>
        </div>
    );
}
export default MachineScreen;

