export default function TodoInputForm(todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>) {
    return (
        <div>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </div>
    )
}
