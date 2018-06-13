import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Link} from 'react-router-dom';
import {getasaying} from 'actions/home.js'
import {connect} from 'react-redux';
import Win from 'components/Setfontsize/Setfontsize';
import style from './home.css';

class Home extends Component {
    componentDidMount() {
        Win(false);
        let sayingUrl = 'http://api.avatardata.cn/MingRenMingYan/Random?key=75ad09cedf9d4af1a693cc91f166f7f9';
        this.props.getasaying(sayingUrl);
    }
    render() {
        console.log(this);
        return (
            <div className = {style.bigbg}>
                <div className = {style.layout}>
                    <div className = {style.wellknown}>
                        <span>伊萨可夫斯基</span>
                        <p>爱情，这不是一颗心去敲打另一颗心，而是两颗心共同撞击的火花撞击的火花撞击的火花。</p>
                    </div>
                    <div className = {style.logonstart}>
                        <p><span>ZEN</span>read</p>
                        <Link to = '/'>开始</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        saying: state.home
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getasaying: (url) => {
            dispatch(getasaying(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);