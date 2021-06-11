import './menu.styles.scss';
import { withRouter } from 'react-router-dom';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu.styles';

const Menu = ({ title, imageURL, size, linkUrl, history, match }) => {
    console.log(size)
    return (
        //We are creating background image as a new div because we do not want main container to gro on hover
        //We just want the image to grow.
        //We do not include content inside image div because we do not want content to gro on hover. 
        //So we will increase the size only of image div
     
        <MenuItemContainer
            size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer
                className='background-image' imageUrl={imageURL}
            />
            

            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(Menu);