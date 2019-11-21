export const ADD_ARTICLE = "ADD_ARTICLE";

// Reducer to add article
const articleReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default articleReducer;