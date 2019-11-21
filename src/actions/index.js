export const ADD_ARTICLE = "ADD_ARTICLE";

// Action to add article to store
export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});