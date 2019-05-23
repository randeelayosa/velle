export const createList = (wishlist) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    dispatch({type: 'CREATE_WISHLIST', wishlist})
  }
};
