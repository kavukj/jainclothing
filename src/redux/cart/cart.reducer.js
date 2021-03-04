import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_HIDDEN':
            return {
                ...state,
                hidden:!state.hidden
            }
        case 'ADD_ITEM':
            return {
                ...state,
                //...state.cartItems helps us keep previous items and add new items as well
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
