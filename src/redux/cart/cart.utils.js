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

//This file is helping us to save the quantity of items and prevent creation of new array even if same item is added
//This checks if same item is added then instead of creating new array, quantity in older array is changed