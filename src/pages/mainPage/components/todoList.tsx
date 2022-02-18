import TodoObject from '../../../Data/todoObject';
import { customAxios } from '../../../lib/customAxios';

export default function TodoList(username:string, listTodo:TodoObject[], setListTodo:React.Dispatch<React.SetStateAction<TodoObject[]>>, deleteTodo:(idx: number) => void):JSX.Element {
    
    
    return (
        <div className="todo-list">
            <h1>{username}'s todo list</h1>
            <ul>
                {listTodo.map((element, index) => (
                    <li 
                        key={index.toString()}
                        className={element.isComplete === true ? "complete" : "uncomplete"}>
                        <span>{element.todo}</span>
                        <input type="checkbox" onChange={() => {
                            const postObj = {
                                id : element.idx,
                                todo : element.todo,
                                complete : !element.isComplete
                            };
                            customAxios.put("todo", postObj)
                            .then((response) => {
                                let resultData: TodoObject = {
                                    idx: response.data.id,
                                    todo: response.data.todo,
                                    isComplete : response.data.complete
                                }
                                let resultArr: TodoObject[] = [...listTodo];

                                for(let i = 0; i < resultArr.length; i++) {
                                    if(resultArr[i].idx === resultData.idx) {
                                        resultArr[i] = resultData;
                                    }
                                }

                                setListTodo(resultArr);
                            });
                        }} checked={element.isComplete}/>
                        <button onClick={() => deleteTodo(element.idx)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
