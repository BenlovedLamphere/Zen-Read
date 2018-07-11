import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './article.css';
import Win from 'components/Setfontsize/Setfontsize';
import Foot from 'components/Foot/Foot';

import {getArticle} from 'actions/article.js'
import {connect} from 'react-redux'; 
class Article extends Component {
    constructor (props) {
        super (props);
        this.state = {arttt:'加截中...',artbody:'',artimgurl:'',artimgsource:''};
    }
	componentDidMount () {
        Win(false);
        let articlenum = this.props.match.params.number;
        let alistUrl = 'https://zhihu-daily.leanapp.cn/api/v1/contents/' + articlenum;
        let articleSuccessFn = this.getarticleSuccess.bind(this);
        this.props.getArticle(alistUrl,articleSuccessFn);
	}

	getarticleSuccess () {
		if (this.props.articledata.callback.CONTENTS) {
			let articlearr = this.props.articledata.callback.CONTENTS
			let articlestate = this.state;
			articlestate.arttt = articlearr.title;
			articlestate.artimgurl = articlearr.image.replace('https://','//images.weserv.nl/?url=');
			articlestate.artimgsource = articlearr.image_source;
			let reg = new RegExp('http://pic',"g"); //创建正则RegExp对象   
			articlestate.artbody = articlearr.body.replace(reg,'//images.weserv.nl/?url=pic');
			this.setState(articlestate);
		}
	}
    render() {
        return (
			<div className = {style.bigbg}>
                <ul className = {style.slidebox}>
                    <h1>正文</h1>
					<li>
                        <img src = {this.state.artimgurl} />
                        <p><span>{this.state.arttt}</span></p>
                    </li>
                    <img  onClick={()=>history.go(-1)} className = {style.back} src = {require('./img/back.png')} />
                    <span className = {style.source}>图片 {this.state.artimgsource}</span>
                </ul>
                <div className = {style.listbox}>
                    <div className = {style.articlebox} dangerouslySetInnerHTML={{__html:this.state.artbody}} />
                </div>
                <Foot/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        articledata: state.article
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (url,fn) => {
            dispatch(getArticle(url,fn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);



                    
                    // <ReactCSSTransitionGroup
                    //       transitionName="example"
                    //       transitionAppearTimeout={1500}
                    //       transitionEnterTimeout={1500}
                    //       transitionLeaveTimeout={1300}
                    //       transitionAppear={true}
                    //       transitionEnter={true}
                    //       transitionLeave={true}>
                    //     {hd}
                    // </ReactCSSTransitionGroup>