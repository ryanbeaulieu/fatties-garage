import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import './Card.css'

const card = props => {

    return (
        <Paper className="Card-Root" style={{'--animation-delay': props.idx}}>
            <div className="Card">
            <div className={props.details.outOfStock ? "soldout image-container" : "image-container"}>
                <Link to={'/product/' + props.details._id}><img data-src={props.details.productImages[0]} alt={props.details.name} /></Link>
            </div>
            <div className="details-container">
            <p className="card-title" title={props.details.name}>{props.details.name}</p>
            <p className="card-category">{props.details.category}</p>
            <p className="card-price"><span className={props.details.salePrice ? 'strikethrough' : null}>${props.details.price.toFixed(2)}</span> {props.details.salePrice ? "$" + props.details.salePrice.toFixed(2) : null}</p>
            </div>
        </div>
        </Paper>
        
    )
}

export default card;