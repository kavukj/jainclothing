import './menu.styles.scss';
import { withRouter } from 'react-router-dom';

const Menu = ({title, imageURL,size,linkUrl,history,match}) =>{
    return(
        //We are creating background image as a new div because we do not want main container to gro on hover
        //We just want the image to grow.
        //We do not include content inside image div because we do not want content to gro on hover. 
        //So we will increase the size only of image div
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage:`url(${imageURL})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(Menu);