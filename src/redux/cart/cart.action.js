//we do not need payload here, because no value is being set
export const toggleCartHidden =()=>({
    type:'TOGGLE_HIDDEN'
});

export const addItem = item => ({
    type:'ADD_ITEM',
    payload: item
});

export const clearItem = item => ({
    type:'CLEAR_ITEM',
    payload: item
});
