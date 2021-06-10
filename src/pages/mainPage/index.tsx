import React from 'react'

import buttonBundle from './components/buttonBundle';

function mainPage(greeting:string):JSX.Element {
    return (
        <div>
            <p>{greeting}</p>
            {buttonBundle()}
        </div>
    )
}

export default mainPage;