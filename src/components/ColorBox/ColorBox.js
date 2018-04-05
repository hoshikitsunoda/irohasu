import React from 'react';

import classes from './ColoBox.css'

const column = [1, 2, 3, 4, 5]

const colorBox = () => {
    return (
        <div className={classes.ColorWrapper}>
            {column.map(row => {
                row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
                return row.map((rowNum, index) => {
                    return <div className={classes.Box} key={rowNum} id={rowNum}></div>
                })
            })}
        </div>
    )
}

export default colorBox;