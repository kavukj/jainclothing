import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-group.style.scss';

const CollectionGroup = ({title,items,match}) => (
    <div className="collection-group">
        <h1 className="collection-group-title"><Link to = {`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()} </Link></h1>
        <div className="collection-group-items">
            {items.filter((item,idx) => idx < 4).map((item) => (
                <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)
export default withRouter(CollectionGroup);