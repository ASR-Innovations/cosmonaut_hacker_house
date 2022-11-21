import React from 'react'
import PotentialSingleCard from '../Common/Potential_Single_Card'
import COMDEX_ICON from '../../asset/image/Projects_logo/comdex_logo.svg';
import './index.scss'

const Partners = () => {
    return (
        <>
            <div className="partner_main_container">
                <div className="max_width">
                    <div className="partner_comntainer">
                        <div className="titel_container">
                            <div className="heading primary_heading">
                                Partners
                            </div>
                        </div>

                        <div className="partners_cards_containers">
                            <div className="partner_container">
                                <PotentialSingleCard image={COMDEX_ICON} />
                                <PotentialSingleCard image={COMDEX_ICON} />
                                <PotentialSingleCard image={COMDEX_ICON} />
                            </div>
                        </div>

                        <div className="text_container">
                            <div className="title">
                                Interested in partnering for the event?
                            </div>
                            <div className="button">
                                <button className='btn_primary'>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners