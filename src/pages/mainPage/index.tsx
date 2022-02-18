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

    const func = async () => {
        return await customAxios.get(url);
    }

    const updateListData = () => {
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
    }

    useEffect(() => {
        updateListData();
    }, [url]);

    const addTodoCmd = () => {
        const addObj = {
            id : listTodo.length + 1, 
            todo : todo, 
            complete : false
        };
        customAxios.post(url, addObj)
        .then(() => {
            updateListData();
        });
    }

    const deleteTodoCmd = (idx:number) => {
        const deleteObj = {
            id : idx,
            todo : todo, 
            complete : false
        }
        customAxios.delete(url, {data : deleteObj})
        .then(() => {
            updateListData();
        });
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