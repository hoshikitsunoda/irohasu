import React, { Component } from 'react'
import axios from 'axios'

import classes from './InfoBox.css'

class InfoBox extends Component {
    state = {
        name: null,
        rgb: null,
        cmyk: null,
        hsl: null,
        hsv: null,
        xyz: null
    }

    infoDataHandler = () => {
        const $rightHex = document.querySelector('#rightText').innerHTML.substr(1)
        axios.get('http://www.thecolorapi.com/id?hex=' + $rightHex)
                .then(res => {
                    console.log(res)
                })
    }

    render() {
        return (
            <div 
                id="dataHolder"
                className={classes.InfoBox}
                onMouseEnter={this.infoDataHandler}>
            </div>
        )
    }
}

export default InfoBox