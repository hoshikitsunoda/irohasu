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
                    this.setState({
                        name: res.data.name.value,
                        rgb: res.data.rgb.value,
                        cmyk: res.data.cmyk.value,
                        hsl: res.data.hsl.value,
                        hsv: res.data.hsv.value,
                        xyz: res.data.XYZ.value
                    })
                })
    }

    render() {
        return (
            <div 
                id="dataHolder"
                className={classes.InfoBox}
                onMouseEnter={this.infoDataHandler}>
                <ul>
                    <li>color name: {this.state.name}</li>
                    <li>rgb: {this.state.rgb}</li>
                    <li>cmyk: {this.state.cmyk}</li>
                    <li>hsl: {this.state.hsl}</li>
                    <li>hsv: {this.state.hsv}</li>
                    <li>xyz: {this.state.xyz}</li>
                </ul>    
            </div>
        )
    }
}

export default InfoBox