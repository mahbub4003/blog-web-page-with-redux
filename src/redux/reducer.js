import { SEARCH_BY_AUTHOR, SEARCH_BY_CATAGORY, SEARCH_BY_INPUT } from "./constant";
import initialState from "./initialState";

const reducer = (state=initialState, action) => {
      switch (action.type) {
        case SEARCH_BY_CATAGORY:
            return state.filter((blog) => blog.catagory === action.payload)

        case SEARCH_BY_AUTHOR:
            return state.filter((blog) => blog.author === action.payload)
      case SEARCH_BY_INPUT:
            return state.filter((blog) => blog.title.toLowerCase().includes(action.payload))
        default:
            return state;
    }
}

export default reducer;