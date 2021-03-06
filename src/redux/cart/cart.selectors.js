import { createSelector } from 'reselect';

//input selector that returns cart from state
const selectCart = (state) => state.cart;

//output selector with input selector
export const selectCartItems = createSelector(
    //it takes two parameters: one is array of input selectors and other is function that returns a value we want
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

//output selector with output selector
export const selectCartQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.price*cartItem.quantity, 0
    )
)

