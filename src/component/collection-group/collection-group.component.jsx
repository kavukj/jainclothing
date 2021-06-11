import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-group.style.scss';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-group.styles';

const CollectionGroup = ({title,items,match}) => (
    <CollectionPreviewContainer>
         <TitleContainer><Link to = {`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()} </Link></TitleContainer>
         <PreviewContainer>
            {items.filter((item,idx) => idx < 4).map((item) => (
                <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
        </CollectionPreviewContainer>
)
export default withRouter(CollectionGroup);