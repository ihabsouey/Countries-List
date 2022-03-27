import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSun ,faMoon} from '@fortawesome/free-solid-svg-icons'

const getUserTheme = () => {
    const theme = localStorage.getItem('theme') || 'light';
    return theme === 'light' ? true : false;
};

const LightModeToggle = () => {
    const [islightMode, setIslightMode] = useState(getUserTheme());

    useEffect(() => {
        document.documentElement.className = `${islightMode && 'light'}`;
        localStorage.setItem('theme', islightMode ? 'light' : 'dark');
    }, [islightMode])

    return (
        <div className='toggle-btn' onClick={(e) => setIslightMode(!islightMode)}>
          
            {!islightMode &&
                <FontAwesomeIcon id='colorMode'  icon={faMoon} />

            }&nbsp;&nbsp;
             {islightMode &&
                <FontAwesomeIcon id='colorMode'  icon={faSun} />

            }&nbsp;&nbsp;
            {islightMode ? 'Light' : 'Dark'}  Mode
        </div>
    )
}

export default LightModeToggle