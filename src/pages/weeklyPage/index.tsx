import weeklyTodo from "./components/weeklyTodo";


function weeklyPage() {
    return (
        <div>
            {weeklyTodo("my name")}
        </div>
    )
}

export default weeklyPage;