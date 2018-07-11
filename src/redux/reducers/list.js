import {GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAIL} from 'actions/list';


const initState = {
    isLoading: false,
    callback: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                callback: {},
                errorMsg: ''
            };
        case GET_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                callback: action.result.data,
                errorMsg: ''
            };
        case GET_LIST_FAIL:
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