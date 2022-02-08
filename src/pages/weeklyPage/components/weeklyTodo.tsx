import React from 'react'

export default function weeklyTodo(username:String) {
    // 여기서 주간 아이템을 만들어 주고 일간 아이템들을 가져와서 진행할때 일일 todo 목록에 넣어주도록 만든다.
    return (
        <div>
            <h1>{username}'s Weekly page에 오신것을 환영합니다.</h1>
            
            <p>
                이 div는 해당 todo의 주간 목표를 한번에 정리해서 볼 수 있게 해주는 시트이다.
                이 시트를 활용해서 문제를 해결할 때 도움을 받을 수 있게 진행한다.
            </p>            
        </div>
    )
}
