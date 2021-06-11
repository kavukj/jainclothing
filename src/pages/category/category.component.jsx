import './category.styles.scss';
import { selectCategory } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../component/collection-item/collection-item.component';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './category.styles';

const CategoryPage = ({ categoryCollection }) => {
    const { title, items } = categoryCollection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}
//Here we have passed state because this selector needs a part of state on url parameter
const mapStateToProps = (state, ownProps) => ({
    categoryCollection: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);