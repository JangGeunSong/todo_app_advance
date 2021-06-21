export default function TodoInputForm(todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>, isActive:boolean) {
    
    
    return (
        <div className={isActive ? "" : "inactive"}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </div>
    )
}
