import React from 'react'

export default function buttonBundle():JSX.Element {

    const startClick = () => {
        console.log("hey this is start")
    }

    const descriptionClick = () => {
        console.log("not I'm not a criminal")
    }

    return (
        <div className="btnBox red">
            <button onClick={startClick}>시작하기</button>
            <button onClick={descriptionClick}>설명보기</button>
        </div>
    )
}
