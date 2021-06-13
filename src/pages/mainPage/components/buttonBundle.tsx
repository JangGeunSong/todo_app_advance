export default function ButtonBundle(inputOpenStatus:boolean, changeInputStatus:React.Dispatch<React.SetStateAction<boolean>>):JSX.Element {

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
            <button onClick={descriptionClick}>
                {inputOpenStatus === true ? 
                    (<span>input 가이드라인 확인</span>)
                    :
                    (<span>설명보기</span>)
                }
            </button>
        </div>
    )
}
