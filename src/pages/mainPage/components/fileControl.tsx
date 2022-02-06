import TodoObject from '../../../Data/todoObject'

export default function fileControl(data:Array<TodoObject>) {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData]);
    const url = URL.createObjectURL(blob);

    return (
        <div>
            <button>
                <a href={url} download="storedTodoList.json">파일로 추출하기</a>            
            </button>
        </div>
    )
}
