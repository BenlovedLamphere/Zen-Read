export const GET_SAYING_REQUEST = "home/GET_SAYING_REQUEST";
export const GET_SAYING_SUCCESS = "home/GET_SAYING_SUCCESS";
export const GET_SAYING_FAIL = "home/GET_SAYING_FAIL";

export function getasaying(url) {
    return {
        types: [GET_SAYING_REQUEST, GET_SAYING_SUCCESS, GET_SAYING_FAIL],
        promise: client => client.get(url)
    }
}
