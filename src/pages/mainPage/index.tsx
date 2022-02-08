import { useState } from 'react'

import buttonBundle from './components/buttonBundle';
import todoList from './components/todoList';
import todoInputForm from './components/todoInputForm';
import TodoObject from '../../Data/todoObject';
import fileControl from './components/fileControl';

function MainPage():JSX.Element {
    const [listTodo, setListTodo] = useState<TodoObject[]>([
        {
            idx : 1,
            todo : "todo app 제작 템플릿 만들어보기",
            isComplete : false
        },
        {
            idx : 2,
            todo : "todo app 제작 테스트 진행",
            isComplete : true
        }
    ])

    const [isTodoInputOpen, setIsTodoInputOpen] = useState<boolean>(false);
    const [todo, setTodo] = useState<string>("");
    const [inActive, setInActive] = useState<boolean>(false);

    const addTodo = (newTodo:TodoObject) => {
        let newTodoArr = [...listTodo]
        newTodoArr.push(newTodo)
        setListTodo(newTodoArr)
    }

    const addTodoCmd = () => {
        let todoObj:TodoObject = {
            idx : listTodo.length + 1,
            todo: todo,
            isComplete : false
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

    const changeActiveStatus = () => {
        setInActive(!inActive);
    }

    return (
        <div>
            {todoList("user1", listTodo, setListTodo, deleteTodoCmd)}
            {isTodoInputOpen === true ? (todoInputForm(todo, setTodo, addTodoCmd, inActive)) : null}
            {buttonBundle(isTodoInputOpen, setIsTodoInputOpen, addTodoCmd, changeActiveStatus)}
            {fileControl(listTodo)}
        </div>
    )
}

export default MainPage;