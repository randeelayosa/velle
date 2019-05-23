import { initialListState } from '../constants/initialState';


export const wishlistReducer = (state = initialListState, action) => {
  switch (action.type) {
    case 'CREATE_WISHLIST':
      console.log('created project', action.wishlist);
      return state;
    case 'CREATE_WISHLIST_ERROR':
      console.log('create wishlist error', action.error);
      return state;
      default:
        return state;
  }
};
