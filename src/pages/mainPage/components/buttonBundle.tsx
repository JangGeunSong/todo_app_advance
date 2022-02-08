import { useState } from "react"

export default function ButtonBundle(inputOpenStatus:boolean, changeInputStatus:React.Dispatch<React.SetStateAction<boolean>>, addTodoCmd:() => void, changeActiveStatus:() => void):JSX.Element {

    const [descOpen, setDescOpen] = useState(false);

    const openTodoInput = () => {
        changeInputStatus(!inputOpenStatus)
    }

    const descriptionClick = () => {
        setDescOpen(!descOpen);
    }

    return (
        <div className="btnBox red">
            <button onClick={openTodoInput}>
                {inputOpenStatus === true ? 
                    (<span>TODO 등록창 닫기</span>)
                    :
                    (<span>TODO 등록창 열기</span>)
                }
            </button>
            <button>
                {inputOpenStatus === true ? 
                    (<span onClick={addTodoCmd}>todo 입력</span>)
                    :
                    (<span onClick={descriptionClick}>설명보기</span>)
                }
            </button>
            {descOpen ? (
                <div>
                    해당 페이지는 todo 등록창의 컨트롤러 부분입니다. <br />
                    todo 등록창 열기 버튼을 클릭한 후 input 창에 할일을 입력한 후 "todo 입력"을 클릭하거나 Enter를 입력하면 등록됩니다. <br />
                    더 이상 입력하지 않으려면 등록창 닫기로 변경된 버튼을 다시 클릭하십시오. <br />
                </div>
            ) : null}
            
        </div>
    )
}
