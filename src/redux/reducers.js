import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import home from 'reducers/home';
import list from 'reducers/list';
import article from 'reducers/article';
export default combineReducers({
    counter,
    userInfo,
    home,
    list,
    article
});