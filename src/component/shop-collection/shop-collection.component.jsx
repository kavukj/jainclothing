import './shop-collection.styles.scss';
import CollectionGroup from '../collection-group/collection-group.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopData } from '../../redux/shop/shop.selector';

const ShopCollection = ({ collections }) => {
    return (
        <div className="shop-collection">
            {
                collections.map(({ id, ...collectionData }) => (
                    <CollectionGroup key={id} {...collectionData} />
                ))
            }
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    collections:selectShopData
})

export default connect(mapStateToProps)(ShopCollection);