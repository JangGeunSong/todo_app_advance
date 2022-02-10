function createModal() {
    // 신규 주간 리스트 추가를 위한 card 1차 틀 생성
    return (
        <div>
            <h1>신규 주간 리스트 생성</h1>
            <ul>
                <li>추가된 금일 todo</li>
            </ul>
            <button>todo 생성</button>
            <button>주간 todo 생성</button>
        </div>
    );
}

export default createModal;