import React, { useEffect, useState } from 'react'

export default function TMDuseEffect() {
    //state: count
    const [count, setCount] = useState(0);
    //Hàm xử lý sự kiện click here
    const TMDHanldeClick = () => {
        setCount(prev => prev + 1);
    }

    // Sử dụng hàm use Effect để cập nhật lại title; có một tham số
    useEffect(() => {
        document.title = `Trần Minh Đức: You clicked ${count} times`;
        console.log(`document.title = You clicked ${count} times`);
    });
    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect(() => {
        console.log("Chạy lần đầu tiên - 1 lần");
    }, []);
    //[deps]
    useEffect(() => {
        console.log(`useEffect count click:`, count);
    }, [count]);

    return (
        <div>
            <h2>Demo - Use Effect: You clicked {count} times</h2>
            <button onClick={TMDHanldeClick}>Click here</button>
        </div>
    )
}
