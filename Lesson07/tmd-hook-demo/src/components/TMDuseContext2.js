import React, { useContext } from 'react'
import { ThemeContext } from './TMDuseContext'

export default function TMDuseContext2() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>TMDuseContext2</h2>
            <p>
                <b>2210900014</b>
                <b>Trần Minh Đức</b>
                <i>K22CNT4</i>
            </p>
        </div>
    )
}
