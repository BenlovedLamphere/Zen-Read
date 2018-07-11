import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './list.css';
import Win from 'components/Setfontsize/Setfontsize';
import Foot from 'components/Foot/Foot';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {getAlist} from 'actions/list.js'
import {connect} from 'react-redux'; 

class List extends Component {
    constructor (props) {
        super (props);
        this.state = {imgUrl:`${require('./img/loading.jpg')}`,key:'none',href:'',title:'加载中...',lists:''};
        this.around = -1;
        this.timer;
        this.lister = 0;
    }
    componentDidMount() {
        Win(false);
        let alistUrl = 'https://zhihu-daily.leanapp.cn/api/v1/last-stories';
        let alistSuccessFn = this.getlistSuccess.bind(this);
        this.props.getAlist(alistUrl,alistSuccessFn);
    }
    componentWillUnmount() {
          clearTimeout(this.timer);  
    }    
    makeSliderimg (toparr) {
        if (this.around == 4) {
            this.around = 0;
        } else {
            this.around = this.around + 1;
        }
        let asliderstate = this.state;
        asliderstate.imgUrl = toparr[this.around].image.replace('https://','//images.weserv.nl/?url=');
        asliderstate.title = toparr[this.around].title;
        asliderstate.key = 'img' + this.around;
        asliderstate.href = '/article/' + toparr[this.around].id;
        this.setState(asliderstate);
        this.timer = setTimeout(()=>{
            this.makeSliderimg(toparr);
        }, 4000)
    }
    makeArticlelist (listarr) {
        let asliderstate = this.state;
        asliderstate.lists = listarr.map ((elt,index)=>{
            let keyno = 'listone' + index;
            let imageurl = elt.images[0].replace('https://','//images.weserv.nl/?url=');
            let linkurl = '/article/' + elt.id;
            return  <li key = {keyno}>
                        <img src = {imageurl} />
                        <Link to = {linkurl}>{elt.title}）</Link>
                    </li>
        })
        this.setState(asliderstate);
    }

    getlistSuccess () {
        if (this.props.listdata.callback) {
            let toparr = this.props.listdata.callback.STORIES.top_stories;
            let listarr = this.props.listdata.callback.STORIES.stories;
            this.makeSliderimg(toparr);
            this.makeArticlelist(listarr);
            
        };
    }
    render() {
        let hd =    <li className = 'example' key = {this.state.key}>
                        <img src = {this.state.imgUrl} />
                        <Link to = {this.state.href}><span>{this.state.title}</span></Link>
                    </li>
        return (
            <div className = {style.bigbg}>
                <ul className = {style.slidebox}>
                    <h1>今日热读</h1>
                    <ReactCSSTransitionGroup
                          transitionName="example"
                          transitionAppearTimeout={1500}
                          transitionEnterTimeout={1500}
                          transitionLeaveTimeout={1300}
                          transitionAppear={true}
                          transitionEnter={true}
                          transitionLeave={true}>
                        {hd}
                    </ReactCSSTransitionGroup>
                    <img onClick={()=>history.go(-1)} className = {style.back} src = {require('./img/back.png')} />
                    <ul className = {style.dots}>
                        <li className = {(this.around == 0) ? style.active : ''} ></li>
                        <li className = {(this.around == 1) ? style.active : ''} ></li>
                        <li className = {(this.around == 2) ? style.active : ''} ></li>
                        <li className = {(this.around == 3) ? style.active : ''} ></li>
                        <li className = {(this.around == 4) ? style.active : ''} ></li>
                    </ul>
                </ul>
                <ul className = {style.listbox}>
                    {this.state.lists}
                </ul>
                <Foot/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        listdata: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAlist: (url,fn) => {
            dispatch(getAlist(url,fn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);