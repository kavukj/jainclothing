//A util file is file which have some functionailty which is used in many other files.

export const addItemToCart = (cartItems,itemToBeAdded)=>{
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToBeAdded.id
    );
    //This means id of item to be added is similar to any one item already there in cart then store that item in existingItems
    if(existingItem){
        return cartItems.map(item => (
            item.id === itemToBeAdded.id ?
            {...item,quantity:item.quantity+1}
            : item
        ))
    }   

    return [...cartItems,{...itemToBeAdded, quantity:1}]
}
//This function is helping us to save the quantity of items and prevent creation of new array even if same item is added
//This checks if same item is added then instead of creating new array, quantity in older array is changed

export const decreaseItemFromCart = (cartItems,itemToBeRemoved)=>{
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToBeRemoved.id
    )
    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id != itemToBeRemoved.id);
    }
    return cartItems.map(cartItem => 
        cartItem.id === itemToBeRemoved.id ?
        { ...cartItem,quantity : cartItem.quantity -1 } :
        cartItem
    );
}