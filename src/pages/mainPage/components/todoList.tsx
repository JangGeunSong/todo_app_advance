import TodoObject from '../../../Data/todoObject';

export default function TodoList(username:string, listTodo:TodoObject[], setListTodo:React.Dispatch<React.SetStateAction<TodoObject[]>>, deleteTodo:(idx: number) => void):JSX.Element {
    
    
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
                            setListTodo(newTodoArr)
                        }} checked={element.isComplete}/>
                        <button onClick={() => deleteTodo(element.idx)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
