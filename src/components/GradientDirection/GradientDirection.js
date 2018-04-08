import React, { Component } from 'react'

import classes from './GradientDirection.css'

class GradientDirection extends Component {
    render() {
        return <div className={classes.DropDownWrapper}>
            <select className={classes.DropDown}>
                <option>to right</option>
                <option>to left</option>
                <option>to bottom</option>
                <option>to top</option>
            </select>
            <div className={classes.Arrow}>></div>
        </div>
    }
}

export default GradientDirection