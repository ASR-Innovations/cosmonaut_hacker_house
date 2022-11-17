/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.scss'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';


const Footer = () => {
    return (
        <>
            <div className="footer_main_container">
                <div className="max_width">
                    <div className="footer_container">
                        <div className="up_container">
                            <div className="copyright">
                                © 2022 Cosmonaut Hacker House. <br />
                                All Rights Reserved.
                            </div>
                            <div className="links">
                                <ul>
                                    <li>
                                        <a href="#" > <AiOutlineTwitter /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaTelegramPlane /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaDiscord /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom_container">
                            <div className="text">
                                <div>Made with</div>
                                <span><AiFillHeart /> </span>
                                <div>   by A.S.R Innovations</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer