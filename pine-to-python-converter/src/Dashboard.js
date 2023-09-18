// src/Dashboard.js

import React, { useState } from 'react';

function Dashboard() {
    const [pineScript, setPineScript] = useState('');
    const [pythonCode, setPythonCode] = useState('');

    const handleConversion = () => {
        // Here, you'd typically make an API call to your backend to convert the Pine Script to Python.
        // For demonstration purposes, I'm just setting the Python code to be the same as the Pine Script.
        setPythonCode(pineScript);
    };

    return (
        <div className="dashboard">
            <div className="input-panel">
                <h2>Pine Script Input</h2>
                <textarea value={pineScript} onChange={e => setPineScript(e.target.value)} />
                <button onClick={handleConversion}>Convert</button>
            </div>
            <div className="output-panel">
                <h2>Python Output</h2>
                <textarea value={pythonCode} readOnly />
            </div>
        </div>
    );
}

export default Dashboard;
