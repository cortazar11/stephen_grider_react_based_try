import React from 'react';

import imageList from '../css/image-list.module.css';

const ImageList=(props)=>{

    console.log(props.images)
    
    return (
        
        <div>
            <ul>{props.images.map(image=>{
                return <li key={image.id} ><img src={image.webformatURL} className={imageList.image} /></li>
            })}
            </ul>
        </div>
    )
}

export default ImageList;