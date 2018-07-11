export const GET_LIST_REQUEST = "list/GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "list/GET_LIST_SUCCESS";
export const GET_LIST_FAIL = "list/GET_LIST_FAIL";

export function getAlist(url,fn) {
    return {
        types: [GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAIL],
        promise: client => client.get(url,fn),
        afterSuccess:fn
    }
}
