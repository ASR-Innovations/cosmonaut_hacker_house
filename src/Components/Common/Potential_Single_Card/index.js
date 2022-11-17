import React from 'react'
import './index.scss';

const PotentialSingleCard = ({
    image
}) => {
    return (
        <>
            <div className="potential_single_main_comntainer">
                <div className="single_potential_card_box">
                    <div className="image_box">
                        <img src={image} alt="Comdex" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotentialSingleCard