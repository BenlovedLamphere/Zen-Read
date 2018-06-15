import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Link} from 'react-router-dom';
import {getasaying} from 'actions/home.js'
import {connect} from 'react-redux';
import Win from 'components/Setfontsize/Setfontsize';
import style from './home.css';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {sentence:'',from:''};
    }
    componentDidMount() {
        Win(false);
        // let sayingUrl = 'http://api.avatardata.cn/MingRenMingYan/Random?key=75ad09cedf9d4af1a693cc91f166f7f9';
        // let sayingUrl = 'http://m.ilikezu.cn:8080/ssc/game/getgameHistory.xhtml';
        // let sayingUrl = 'http://gank.io/api/search/query/listview/category/Android/count/10/page/1';
        let sayingUrl =  'https://v1.hitokoto.cn';
        let checkRstFn = this.checksayingRst.bind(this);
        this.props.getasaying(sayingUrl,checkRstFn);
    }
    checksayingRst () {
        let asayed = this.props.saying.sayingback;
        let astate = this.state;
        var reg= /^[A-Za-z]+$/;  //英文正则
        if (reg.test(asayed.hitokoto)) {
            let sayingUrl =  'https://v1.hitokoto.cn';
            let checkRstFn = this.checksayingRst.bind(this);
            this.props.getasaying(sayingUrl,checkRstFn);
        } else {
            astate.sentence = asayed.hitokoto;
            astate.from = (asayed.from == '网络') ? '网络佚名' : asayed.from;
            this.setState(astate);            
        }
    }
    render() {
        console.log(this);
        return (
            <div className = {style.bigbg}>
                <div className = {style.layout}>
                    <div className = {style.wellknown}>
                        <span>{this.state.from}</span>
                        <p>{this.state.sentence}</p>
                    </div>
                    <div className = {style.logonstart}>
                        <p><span>ZEN</span>read</p>
                        <Link to = '/list'>开始</Link>
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
        getasaying: (url,fn) => {
            dispatch(getasaying(url,fn))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);