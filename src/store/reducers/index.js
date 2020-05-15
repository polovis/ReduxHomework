import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }
  // return state;




  // switch(action.type) {
  //   case ADD_ARTICLE:
  //     return Object.assign({}, state, {
  //           articles: state.articles.concat(action.payload)
  //         });
  //         default:
  //           return state;
  // }

  switch(action.type) {
    case ADD_ARTICLE:
      return {...state, articles: state.articles.concat(action.payload)};
          default:
            return state;
  }






}

export default rootReducer;