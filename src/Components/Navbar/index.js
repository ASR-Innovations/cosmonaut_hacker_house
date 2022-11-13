import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../asset/image/Logo.svg"
import './index.scss'

const Navbar = () => {


    const animationFunction = () => {
        var wobbleElements = document.querySelectorAll('.wobble');

        wobbleElements.forEach(function (el) {
            el.addEventListener('mouseover', function () {

                if (!el.classList.contains('animating') && !el.classList.contains('mouseover')) {

                    el.classList.add('animating', 'mouseover');

                    var letters = el.innerText.split('');

                    setTimeout(function () { el.classList.remove('animating'); }, (letters.length + 1) * 50);

                    var animationName = el.dataset.animation;
                    if (!animationName) { animationName = "jump"; }

                    el.innerText = '';

                    letters.forEach(function (letter) {
                        if (letter == " ") {
                            letter = "&nbsp;";
                        }
                        el.innerHTML += '<span class="letter">' + letter + '</span>';
                    });

                    var letterElements = el.querySelectorAll('.letter');
                    letterElements.forEach(function (letter, i) {
                        setTimeout(function () {
                            letter.classList.add(animationName);
                        }, 50 * i);
                    });

                }

            });

            el.addEventListener('mouseout', function () {
                el.classList.remove('mouseover');
            });
        });
    }


    return (
        <>
            <div className="navbar_main_container soft_box_shadow">
                <div className="max_width">
                    <div className="navbar_container">
                        <div className="logo_container">
                            <div className="logo">
                                <Link to="/">  <img src={Logo} alt="Cosmonaut" /></Link>
                            </div>
                        </div>
                        <div className="links_container">
                            <div className="links">
                                <ul>
                                    <li>
                                        <NavLink className="wobble" onMouseEnter={animationFunction}>
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="wobble" onMouseEnter={animationFunction}>
                                            Speakers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="wobble" onMouseEnter={animationFunction}>
                                            Sponsors
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="wobble" onMouseEnter={animationFunction}>
                                            Partners
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="wobble" onMouseEnter={animationFunction}>
                                            Agenda
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="button_container">
                            <div className="button_box">
                                <button className='btn_primary'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;