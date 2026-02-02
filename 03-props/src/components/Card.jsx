import React from 'react'

const Card = ({ user, habitat, img }) => {
    return (
        <div className="card">
            <img src={img} alt={user} />

            <h1>{user}</h1>
            <p>Habitat: {habitat}</p>

            <button>View Profile</button>
        </div>
    )
}

export default Card
