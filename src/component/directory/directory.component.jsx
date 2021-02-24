import React from 'react';
import './directory.styles.scss';
import Menu from '../menu-item/menu.component';

//We need to store the state values of menu item. So we will create a class Component

class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections : [
                {
                    title:"hats",
                    imageURL : "https://i.ibb.co/cvpntL1/hats.png",
                    id:1,
                    linkUrl:"hats"
                },
                {
                    title:"Jackets",
                    imageURL : "https://i.ibb.co/px2tCc3/jackets.png",
                    id:2,
                    linkUrl:"jackets"
                }  ,
                {
                    title:"Sneakers",
                    imageURL : "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id:3,
                    linkUrl:"sneakers"
                },
                {
                    title:"Women",
                    imageURL : "https://i.ibb.co/GCCdy8t/womens.png",
                    size:"large",
                    id:4,
                    linkUrl:"women"
                },
                {
                    title:"Men",
                    imageURL : "https://i.ibb.co/R70vBrQ/men.png",
                    size:"large",
                    id:5,
                    linkUrl:"men"
                } 
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id,...otherSectionProps}) =>(
                    //this.state.sections.map(({id,title,imageURL,size}) =>(
                         //<Menu key={id} title={title} imageURL={imageURL} size={size} />
                         <Menu key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;