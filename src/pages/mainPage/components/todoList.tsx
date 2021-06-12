import React from 'react'

interface todoObject {
    idx : Number,
    todo : string,
    isComplete : boolean
}

export default function todoList(username:string):JSX.Element {
    
    const listPrint = () => {
        const list:Array<todoObject> = [
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
        ];

        return list;
    }

    let todo_list:Array<todoObject> = listPrint();

    return (
        <div className="todo-list">
            <h1>{username}'s todo list</h1>
            <ul>
                {todo_list.map(element => (
                    <li 
                        key={element.idx.toString()}
                        className={element.isComplete === true ? "complete" : "uncomplete"}>
                        {element.todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}
