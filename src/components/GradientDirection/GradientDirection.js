import React, { Component } from 'react'

import classes from './GradientDirection.css'

class GradientDirection extends Component {
    directionHandler() {
        const $backGroundLeft = document.querySelector('#leftText').innerHTML
        const $backGroundRight = document.querySelector('#rightText').innerHTML
        const $select = document.querySelector('#select').value

        document.querySelector('#gradient').style.background = 
            "linear-gradient(" + $select + ", " + $backGroundLeft + ", " + $backGroundRight + ")"
        document.querySelector('#gradientText').innerHTML = 
            "linear-gradient(" + $select + ", " + $backGroundLeft + ", " + $backGroundRight + ")"
    }

    render() {
        return <div className={classes.DropDownWrapper}>
            <select 
                onChange={this.directionHandler}
                id="select" 
                className={classes.DropDown}>
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