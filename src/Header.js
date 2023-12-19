import React from 'react'
import LightModeToggle from './LightMode'

export const Header = () => {
    return (
        <div className='header'>
            <div>
                <span> Where in the world ??</span>
            </div>
            <div>
              <button>
              <LightModeToggle />
                  </button>  
            </div>
        </div>

    )
}
