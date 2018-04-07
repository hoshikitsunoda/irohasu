import React, { Component } from 'react';

import classes from './Palette.css'
import ColorBox from '../../components/ColorBox/ColorBox'

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const column = [1, 2, 3, 4, 5]

class Palette extends Component {
    render() {
        return <div className={classes.Container}>
                <div className={classes.ColorWrapper}>
                    {column.map(id => {
                        return row.map(index => {
                            return <ColorBox key={index} />
                        })
                    })}
                </div>
        </div>
    }
}

export default Palette