// Code Keypad Component Here

import React from 'react';

function Keypad () {
    function handleClick(event) {
        console.log("Entering password...")

    }

    return(
        <div>
            <input 
                type="password"
                name="password"
                onChange={handleClick}
                placeholder="Enter password..."
            />
        </div>
    )
}
export default Keypad;
