export default function ButtonBundle(inputOpenStatus:boolean, changeInputStatus:React.Dispatch<React.SetStateAction<boolean>>, addTodoCmd:() => void, changeActiveStatus:() => void):JSX.Element {

    const openTodoInput = () => {
        changeInputStatus(!inputOpenStatus)
    }

    const descriptionClick = () => {
        console.log("not I'm not a criminal")
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
        </div>
    )
}
