import { useState } from 'react'

import buttonBundle from './components/buttonBundle';
import todoList from './components/todoList';
import todoInputForm from './components/todoInputForm';

function MainPage(greeting:string):JSX.Element {
    const [isTodoInputOpen, setIsTodoInputOpen] = useState<boolean>(false);
    const [todo, setTodo] = useState<string>("");

    return (
        <div>
            <p>{greeting}</p>
            {todoList("user1")}
            {isTodoInputOpen === true ? (todoInputForm(todo, setTodo)) : null}
            {buttonBundle(isTodoInputOpen, setIsTodoInputOpen)}
        </div>
    )
}

export default MainPage;