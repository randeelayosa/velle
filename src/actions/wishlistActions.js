export const createList = (wishlist) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('wishlists').add({
      ...wishlist,
      person: 'Anonymous',
      gender: 'female',
      age: '31',
      size: 'AM',
      need: 'business casual blouses',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_WISHLIST', wishlist});
    }).catch((error) => {
      dispatch({ type: 'CREATE_WISHLIST_ERROR', error});
    })
  }
};
