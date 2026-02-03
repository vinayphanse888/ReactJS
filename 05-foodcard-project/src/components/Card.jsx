import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="image-box">
                <span className="badge">✔</span>
                <img
                    src={props.image}
                    alt="Vegetable Burger"
                />
            </div>

            <h3>{props.name}</h3>

            <div className="price-rating">
                <div className="price">
                    <span className="new">{props.price}</span>
                    <span className="old">₹249</span>
                </div>

                <div className="rating">
                    ⭐ <span>{props.rating}</span>
                </div>
            </div>

            <div className="actions">
                <button className="wishlist">Wishlist</button>
                <button className="order">Order Now</button>
            </div>
        </div>
    )
}

export default Card