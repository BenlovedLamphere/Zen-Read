export const GET_ARTICLE_REQUEST = "ARTICLE/GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "ARTICLE/GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAIL = "ARTICLE/GET_ARTICLE_FAIL";

export function getArticle(url,fn) {
    return {
        types: [GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL],
        promise: client => client.get(url,fn),
        afterSuccess:fn
    }
}
