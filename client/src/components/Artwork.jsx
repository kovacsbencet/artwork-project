import React from 'react'
import ArtworkDetails from './ArtworkDetails'
import { Link } from "react-router-dom";

function Artwork({_id, name, creator, description, price, image}) {
    
    return (
        <div className = "ArtworkCard" key={_id}>
            <img src={require(`../images/${image}`)} alt="" width="300px" />
            <h2>{name}</h2>
            <h3>Created by <i>{creator}</i></h3>
            <p>{description}</p>
            <Link to="/details">Details</Link>
            <h3>${price}</h3>
        </div>
    )
}

export default Artwork