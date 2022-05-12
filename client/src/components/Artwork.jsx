import React from 'react'
import { Link } from "react-router-dom";

function Artwork({_id, name, creator, description, price, image}) {
    
    return (
        <div className = "ArtworkCard" key={_id}>
            <img src={require(`../images/${image}`)} alt=""/>
            <h2>{name}</h2>
            <h5>Created by <i>{creator}</i></h5>
            <h3>Price: {price} ETH</h3>
            <button>Check out!</button>
        </div>
    )
}

export default Artwork