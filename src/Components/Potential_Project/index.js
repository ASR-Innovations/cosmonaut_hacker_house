import React from 'react'
import PotentialSingleCard from '../Common/Potential_Single_Card';
import './index.scss';
import COMDEX_ICON from '../../asset/image/Projects_logo/comdex_logo.svg';

const PotentialProject = () => {
    return (
        <>
            <div className="potential_main_container">
                <div className="max_width">

                    <div className="text_container">
                        <div className="heading primary_heading">
                            Potential Projects Joining
                        </div>
                    </div>

                    <div className="potential_card_box">
                        <div className="potential_container">
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                            <PotentialSingleCard image={COMDEX_ICON} />
                          
                        </div>

                        <div className="text_container">
                            <div className="title">
                                Interested in sponsoring the event?
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

export default PotentialProject;