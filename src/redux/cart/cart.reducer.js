import { addItemToCart } from './cart.utils';
import { decreaseItemFromCart } from './cart.utils';

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
        case 'DECREASE_ITEM':
            return{
                ...state,
                cartItems:decreaseItemFromCart(state.cartItems,action.payload)
            }
        case 'INCREASE_ITEM':
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case 'CLEAR_ITEM':
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default cartReducer;
