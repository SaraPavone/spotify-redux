import { GET_SONGS, GET_SONGS_LOADING, GET_SONGS_ERROR, SET_SEARCH_QUERY } from "../actions";

const initialState = {
  search: [],
  isLoading: false,
  error: null,
  query: '',
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_SONGS:
      return {
        ...state,
        search: action.payload,
        isLoading: false, 
        error: null,
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false, 
      };
      case SET_SEARCH_QUERY:  
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;