export const GET_SONGS = 'GET_SONGS'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_SONGS_LOADING = 'GET_SONGS_LOADING';
export const GET_SONGS_ERROR = 'GET_SONGS_ERROR';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export const setSearchQueryAction = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query,
  });



export const getSongAction = (query) => {
    return (dispatch) => {
      dispatch({ type: GET_SONGS_LOADING, payload: true });  // Imposta il caricamento a true
  
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore nel recupero dei dati');
          }
        })
        .then((arrayOfSongs) => {
          dispatch({
            type: GET_SONGS,
            payload: arrayOfSongs.data, 
          });
          dispatch({ type: GET_SONGS_LOADING, payload: false }); 
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: GET_SONGS_ERROR, payload: error.message });
          dispatch({ type: GET_SONGS_LOADING, payload: false }); 
        });
    };
  };

export const addToFavoritesAction = (songSelected) => {
    return  {
        type: ADD_TO_FAVORITES,
        payload: songSelected
    }
}

export const removeFromFavoritesAction = (id) => {
    return  {
        type: REMOVE_FROM_FAVORITES,
        payload:id
    }
}