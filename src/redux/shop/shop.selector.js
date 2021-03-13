import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop=>shop.collections
)

//We need this because in our collection map, w ehave id as 1,2 but in url we are passing string as hats,jackets,etc.
//So we will match the id from whole collection and then return the collection only that is being passed in url
const CATEGORY_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    women:4,
    men:5

}

export const selectCategory = categoryUrlParam => createSelector(
    [selectShopData],
    categoryCollection =>  categoryCollection.find(collection => collection.id === CATEGORY_ID_MAP[categoryUrlParam])
)

/*Instead of doing this as it is very long if array will be big, we can convert our shop data array into
 an object with key values as hats, jackets,etc


export const selectCategory = categoryUrlParam => createSelector(
    [selectShopData],
    categoryCollection =>  categoryCollection[categoryUrlParam]
)
*/




