import React from 'react';
import './Card.css'

const card = props => {
    return (
        <div className="Card">
            <div className={props.details.outOfStock ? "soldout image-container" : "image-container"}>
                <img src={props.details.productImages[0]} alt={props.details.name} />
            </div>
            <div className="details-container">
            <p className="card-title" title={props.details.name}>{props.details.name}</p>
            <p className="card-category">{props.details.category}</p>
            <p className="card-price"><span className={props.details.salePrice ? 'strikethrough' : null}>${props.details.price.toFixed(2)}</span> {props.details.salePrice ? "$" + props.details.salePrice.toFixed(2) : null}</p>
            </div>
        </div>
    )
}

export default card;