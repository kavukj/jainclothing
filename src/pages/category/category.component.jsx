import './category.styles.scss';
import { selectCategory } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../component/collection-item/collection-item.component';

const CategoryPage = ({categoryCollection}) => {
    const { title,items} = categoryCollection; 
    return(
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
//Here we have passed state because this selector needs a part of state on url parameter
const mapStateToProps = (state,ownProps) => ({
    categoryCollection : selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);