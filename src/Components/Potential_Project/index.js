import React from 'react'
import PotentialSingleCard from '../Common/Potential_Single_Card';
import './index.scss';

const PotentialProject = () => {
    return (
        <>
            <div className="potential_main_container">
                <div className="max_width">
                    <div className="potential_card_box">
                        <div className="potential_container">
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
                            <PotentialSingleCard />
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