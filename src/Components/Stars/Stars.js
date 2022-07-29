import React from 'react'
import './Stars.css'
import greyStar from '../../assets/icons/star-grey.png'
import orangeStar from '../../assets/icons/star-orange.png'

export default function Stars({ rating }) {

    const ratingArray = [1, 2, 3, 4, 5]

    return (
        <>
            {ratingArray.map((rank) => (
                rank <= rating ? <li className="star">
                    <img key={rank} className="star-img" src={orangeStar} alt="" />
                </li>
                    : <li className="star">
                        <img key={rank} className="star-img" src={greyStar} alt="" />
                    </li>
            ))}
        </>
    )
}
