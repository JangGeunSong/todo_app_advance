export default function TodoInputForm(todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>, addTodoCmd:() => void ,isActive:boolean) {
    
    const enterEvent = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            addTodoCmd();
            setTodo("");
        }
        return;
    }

    return (
        <div className={isActive ? "" : "inactive"}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyPress={enterEvent} />
        </div>
    )
}
