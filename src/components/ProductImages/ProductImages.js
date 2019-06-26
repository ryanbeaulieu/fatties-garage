import React, {useState, useEffect} from 'react';
import './ProductImages.css';

const ProductImages = props => {
    const [displayImg, setDisplayImg] = useState(null);

    useEffect(() => {
       console.log(props.images);
        if(props.images) {
           setDisplayImg(props.images[0]);
        }

    },[props.images])
    
    return (
        <div>
            {displayImg ? (<img src={'http://localhost:3000/uploads/' + displayImg} className="display-img" />) : null}
            <div>
            {props.images && props.images.length > 1 ? props.images.map((img, idx) => {
                return (<img src={'http://localhost:3000/uploads/' +img} onClick={() => {setDisplayImg(img)}} className="img-thumbnail" key={img} />)
            }): null}
            </div>
           
        </div>
    )
}

export default ProductImages;