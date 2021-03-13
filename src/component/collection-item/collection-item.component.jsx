import React from 'react';
import './collection-item.style.scss';
import Button from '../button/button.component';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return(
        <div className="collection-item">
            <div className="item-image" style={{
                backgroundImage:`url(${imageUrl})`
            }} />
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button inverted type="submit" onClick={()=>addItem(item)}>Add To Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem:item => {
        dispatch(addItem(item))
    }
});

export default connect(null,mapDispatchToProps)(CollectionItem);