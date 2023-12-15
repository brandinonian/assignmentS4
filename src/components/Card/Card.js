import React from "react";
import "./Card.css";

const Card = (props) => {

    return (
        <div>
            {props.products.map((product) => (
                <div className="cardContainer" key={product.id}>
                    <div className="cardLeft">
                        <p className="cardTitle">{product.title}</p>
                        <p className="cardDescription">{product.description}</p>
                        <p className="cardPrice">Price: ${product.price}</p>
                        <button onClick={() => props.deleteProduct(product.id)} className="cardDelete">Delete this product</button>
                    </div>
                    <img src={product.image} alt={product.title} className="cardImage" />
                </div>
            ))}
        </div>
    )
}

export default Card;