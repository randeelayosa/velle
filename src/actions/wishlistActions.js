export const createList = (wishlist) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({type: 'CREATE_WISHLIST', wishlist})
  }
};
