import React from 'react'
import './index.scss';
import COMDEX_ICON from '../../../asset/image/Projects_logo/comdex_logo.svg';

const PotentialSingleCard = () => {
    return (
        <>
            <div className="potential_single_main_comntainer">
                <div className="single_potential_card_box">
                    <div className="image_box">
                        <img src={COMDEX_ICON} alt="Comdex" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotentialSingleCard