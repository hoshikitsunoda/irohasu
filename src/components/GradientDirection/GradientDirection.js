import React, { Component } from 'react'

import classes from './GradientDirection.css'

class GradientDirection extends Component {
    render() {
        return <div className={classes.DropDownWrapper}>
            <select className={classes.DropDown}>
                <option id="toRight">to right</option>
                <option id="toLeft">to left</option>
                <option id="toBottom">to bottom</option>
                <option id="toTop">to top</option>
            </select>
            <div className={classes.Arrow}>></div>
        </div>
    }
}

export default GradientDirection