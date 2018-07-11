import React, {Component} from 'react';
import style from './foot.css';

export default class Foot extends Component {
    render() {
        return (
            <div className = {style.footbox}>
                <p><span>IPR owners : zhihu.com</span>  Design by Ben</p>
            </div>
        )
    }
}
