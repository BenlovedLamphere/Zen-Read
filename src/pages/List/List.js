import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './list.css';

export default class List extends Component {
    render() {
        return (
            <div className = {style.bigbg}>
                <ul className = {style.slidebox}>
                	<li>
                		<img src = {require('./img/bigtop.jpg')} />
                		<Link to = '/'>最近，一篇点击破10万的宫颈癌疫苗谣言文，连医生都骗过了</Link>
                	</li>
                </ul>
                <ul>
                	<li>
                		<img src = {require('./img/smallicon.jpg')} />
                		<Link to = '/'>商场和很多人家里，竹制家具越来越多（多图）</Link>
                	</li>
                   	<li>
                		<img src = {require('./img/smallicon.jpg')} />
                		<Link to = '/'>商场和很多人家里，竹制家具越来越多（多图）</Link>
                	</li>
                   	<li>
                		<img src = {require('./img/smallicon.jpg')} />
                		<Link to = '/'>商场和很多人家里，竹制家具越来越多（多图）</Link>
                	</li>
                   	<li>
                		<img src = {require('./img/smallicon.jpg')} />
                		<Link to = '/'>商场和很多人家里，竹制家具越来越多（多图）</Link>
                	</li>
                </ul>

                <p><span>IPR owners : zhihu.com</span>Design by Ben<span></span></p>
            </div>
        )
    }
}