import React, { Component } from 'react';
import './shop.style.scss';
import Shop_data from "./shop.data.js";
import Preview from '../preview/perview.component';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections: Shop_data
        }
    }

    render(){   
        const {collections} = this.state;
        return(
            <div className="shop">
                {
                    collections.map(({id, ...collectionData}) => (
                        <Preview key={id} {...collectionData} />
                    ))
                }   
            </div>
        )
    }
}

export default Shop;