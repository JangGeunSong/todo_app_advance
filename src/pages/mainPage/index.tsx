import { useState } from 'react'

import buttonBundle from './components/buttonBundle';
import todoList from './components/todoList';
import todoInputForm from './components/todoInputForm';
import TodoObject from '../../Data/todoObject';
import fileControl from './components/fileControl';

function MainPage(greeting:string):JSX.Element {
    const [listTodo, setListTodo] = useState<TodoObject[]>([
        {
            idx : 1,
            todo : "todo app 제작 템플릿 만들어보기",
            isComplete : true
        },
        {
            idx : 2,
            todo : "todo app 제작 테스트 진행",
            isComplete : true
        }
    ])

    const [isTodoInputOpen, setIsTodoInputOpen] = useState<boolean>(false);
    const [todo, setTodo] = useState<string>("");

    const addTodo = (newTodo:TodoObject) => {
        let newTodoArr = [...listTodo]
        newTodoArr.push(newTodo)
        setListTodo(newTodoArr)
    }

    const addTodoCmd = () => {
        let todoObj:TodoObject = {
            idx : listTodo.length + 1,
            todo: todo,
            isComplete : true
        }
        addTodo(todoObj);
    }

    const deleteTodoCmd = (idx:number) => {
        let newTodoArr = [...listTodo]
        newTodoArr = newTodoArr.filter(el => {
            return el.idx !== idx;
        })
        setListTodo(newTodoArr)
    }

    return (
        <div>
            <p>{greeting}</p>
            {todoList("user1", listTodo, setListTodo, deleteTodoCmd)}
            {isTodoInputOpen === true ? (todoInputForm(todo, setTodo)) : null}
            {buttonBundle(isTodoInputOpen, setIsTodoInputOpen, addTodoCmd)}
            {fileControl(listTodo)}
        </div>
    )
}

export default MainPage;