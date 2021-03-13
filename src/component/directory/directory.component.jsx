import './directory.styles.scss';
import Menu from '../menu-item/menu.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//We need to store the state values of menu item. So we will create a class Component

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    //this.state.sections.map(({id,title,imageURL,size}) =>(
                    //<Menu key={id} title={title} imageURL={imageURL} size={size} />
                    <Menu key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);