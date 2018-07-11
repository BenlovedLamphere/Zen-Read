import {GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL} from 'actions/article';


const initState = {
    isLoading: false,
    callback: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                callback: {},
                errorMsg: ''
            };
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                callback: action.result.data,
                errorMsg: ''
            };
        case GET_ARTICLE_FAIL:
            return {
                ...state,
                isLoading: false,
                callback: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}