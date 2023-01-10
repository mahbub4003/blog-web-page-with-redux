import { SEARCH_BY_AUTHOR, SEARCH_BY_CATAGORY, SEARCH_BY_INPUT } from "./constant"

export const search_by_catagory = (catagoryName) => {
    return{
        type : SEARCH_BY_CATAGORY,
        payload : catagoryName
    }
}
export const search_by_author = (authorName) => {
    return{
        type : SEARCH_BY_AUTHOR,
        payload : authorName
    }
}
export const search_by_input = (value) => {
    return{
        type : SEARCH_BY_INPUT,
        payload : value
    }
}