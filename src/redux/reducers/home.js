import {GET_SAYING_REQUEST, GET_SAYING_SUCCESS, GET_SAYING_FAIL} from 'actions/home';


const initState = {
    isLoading: false,
    sayingback: {},
    errorMsg: ''

};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_SAYING_REQUEST:
            return {
                ...state,
                isLoading: true,
                sayingback: {},
                errorMsg: ''
            };
        case GET_SAYING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sayingback: action.result.data,
                errorMsg: ''
            };
        case GET_SAYING_FAIL:
            return {
                ...state,
                isLoading: false,
                sayingback: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}