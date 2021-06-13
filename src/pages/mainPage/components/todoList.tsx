import { useState } from 'react';

import TodoObject from '../../../Data/todoObject';

export default function TodoList(username:string):JSX.Element {
    const [listTodo, SetListTodo] = useState<TodoObject[]>([
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
    
    return (
        <div className="todo-list">
            <h1>{username}'s todo list</h1>
            <ul>
                {listTodo.map((element, index) => (
                    <li 
                        key={element.idx.toString()}
                        className={element.isComplete === true ? "complete" : "uncomplete"}>
                        <span>{element.todo}</span>
                        <input type="checkbox" onClick={() => {
                            let newTodoArr = [...listTodo]
                            newTodoArr[index].isComplete = !newTodoArr[index].isComplete;
                            SetListTodo(newTodoArr)
                        }}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
