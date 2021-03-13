import { Route } from 'react-router-dom';
import ShopCollection from '../../component/shop-collection/shop-collection.component';
import CategoryPage from '../category/category.component';

const Shop = ({match}) =>{
    console.log(match);
    return(
        <div className="shop">
            {/* there will be a nested route to go to specific pages like hats, jackets, men etc.*/}
            {/*For creation of nested paths, we need path to reach shop page and then go forward. We can create a static path
            by giving /shop but that is not a good practice.We will use string interpolation using match keyword to get the path of this page and then
            add further paths*/}
            <Route exact path ={`${match.path}`} component={ShopCollection} />
            <Route path ={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}
export default Shop;