import React from 'react'

import buttonBundle from './components/buttonBundle';
import todoList from './components/todoList';

function mainPage(greeting:string):JSX.Element {
    return (
        <div>
            <p>{greeting}</p>
            {todoList("user1")}
            {buttonBundle()}
        </div>
    )
}

export default mainPage;