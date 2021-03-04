import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview.style.scss';

const Preview = ({title,items}) => (
    <div className="preview-collection">
        <h1 className="preview-title">{title.toUpperCase()}</h1>
        <div className="preview-items">
            {items.filter((item,idx) => idx < 4).map((items) => (
                <CollectionItem key={items.id} items={items} />
                ))
            }
        </div>
    </div>
)
export default Preview;