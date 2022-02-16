import { useState, useEffect } from 'react'

import buttonBundle from './components/buttonBundle';
import todoList from './components/todoList';
import todoInputForm from './components/todoInputForm';
import TodoObject from '../../Data/todoObject';
import fileControl from './components/fileControl';
import { customAxios } from '../../lib/customAxios';

function MainPage():JSX.Element {
    const url = "todo";

    const [listTodo, setListTodo] = useState<TodoObject[]>([]);

    const [isTodoInputOpen, setIsTodoInputOpen] = useState<boolean>(false);
    const [todo, setTodo] = useState<string>("");
    const [inActive, setInActive] = useState<boolean>(false);

    useEffect(() => {
        const func = async () => {
            return await customAxios.get(url);
        }
        
        const res = func();
        
        let Arr : TodoObject[] = [];

        res.then((value) => {
            value.data.forEach((el: any) => {
                let obj: TodoObject = {
                    idx: el.id,
                    todo: el.todo,
                    isComplete: el.complete
                }
                Arr.push(obj);
            })
            setListTodo(Arr);
        });
    }, [url]);

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