import React, {Component} from 'react';

// import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';
import './app.css'
export default class App extends Component {
    render() {
        return (
            <div>
                {getRouter()}
            </div>
        )
    }
}

                // <Nav/>