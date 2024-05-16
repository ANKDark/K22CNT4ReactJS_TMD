import React, { createContext, useContext, useState } from 'react';
import TMDuseContext1 from './TMDuseContext1';

export const ThemeContext = createContext();

export default function TMDuseContext() {
    // State 
    const [theme, setTheme] = useState('red');
    const TMDHandleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red');
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2>Demo useContext</h2>
                <TMDuseContext1 />
                <button onClick={TMDHandleChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}
