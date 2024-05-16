import React, { useState } from 'react'

export default function TMDuseState() {
    const [count, setCount] = useState(0);
    //Mảng
    const [list, setList] = useState([1, 5]);
    //Hàm xử lý sự kiện biến đổi (Thêm ngẫu nhiên) 
    const TMDHandleList = () => {
        let num = parseInt(Math.random() * 100)
        // Cập nhật lại state
        setList([
            ...list, num
        ])
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <hr />
            <h3>List: {list.toString()}</h3>
            <button onClick={TMDHandleList}>Thêm ngẫu nhiên</button>
        </div>
    )
}
