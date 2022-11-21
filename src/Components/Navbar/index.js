import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../asset/image/Logo.svg"
import './index.scss'
import { Select } from 'antd';
import { Form, Input } from 'antd';
import clip from '../../asset/image/Clip.svg'
import { BiMenuAltRight } from 'react-icons/bi';
import { CountryCode } from '../../Constant/country-code';

const Navbar = () => {
    const { Option } = Select;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const codeOption = (
        CountryCode.map((n, i) => {
            return (
                <Option key={i} value={n.dial_code}><span className="flag">{n.code}</span><span className="ccode">+{n.dial_code}</span></Option>
            )
        })
    );

    const prefixSelector = (
        <Form.Item name="prefix" noStyle initialValue={91}>
            <Select placeholder={<><span className="flag">US</span><span className="ccode">+1</span></>} className="select-class-custom" dropdownClassName="dropdown-custom" style={{ width: 100 }}>
                {codeOption}
            </Select>
        </Form.Item>
    );


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
                        if (letter === " ") {
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
    const toggleNav = () => {
        const navContainer = document.querySelector('.navbar_container');
        navContainer.classList.toggle("nav_height");

    }

    return (
        <>
            <div className="navbar_main_container soft_box_shadow">
                <div className="max_width">
                    <div className="navbar_container ">

                        <div className="logo_container">
                            <div className="logo">
                                <a href="#/">  <img src={Logo} alt="Cosmonaut" /></a>
                                {/* <a href="#/"> <Link to="/">  <img src={Logo} alt="Cosmonaut" /></Link></a> */}
                            </div>
                        </div>

                        <div className="links_container">
                            <div className="links">
                                <ul>
                                    <li>
                                        {/* <NavLink className="wobble" onMouseEnter={animationFunction}> */}
                                        <a href="#about">
                                            About

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#speakers">
                                            Speakers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#sponsors">
                                            Sponsors
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#partners">
                                            Partners
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#agends">
                                            Agenda
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="button_container">
                            <div className="button_box">
                                <button className='btn_primary' onClick={showModal}>Contact Us</button>
                            </div>

                            <div className="contact_us_modal_main_container">
                                {
                                    isModalOpen && (
                                        <div>
                                            <div className="modal_main_container">
                                                <div className="modal_overlay" onClick={() => handleCancel()}>
                                                </div>
                                                <div className="form_content">
                                                    <div className="image">
                                                        <div className="box_1">
                                                            <div className="box_2">

                                                                <div className="form_content_container">
                                                                    <Form
                                                                        name="basic"
                                                                        labelCol={{ span: 8, }}
                                                                        // wrapperCol={{ span: 26, }}
                                                                        initialValues={{
                                                                            remember: true,
                                                                        }}
                                                                        onFinish={onFinish}
                                                                        onFinishFailed={onFinishFailed}
                                                                        autoComplete="off"
                                                                    >
                                                                        <div className="name_box">

                                                                            <Form.Item name="firstName"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your First Name!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder='First Name' />
                                                                            </Form.Item>

                                                                            <Form.Item name="lastName"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your Last Name!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder='Last Name' />
                                                                            </Form.Item>
                                                                        </div>

                                                                        <div className="email_box">
                                                                            <Form.Item name="email"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your Email!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder='Email' />
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div className="phone">
                                                                            <Form.Item name="phone"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your Phone!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input type="number" addonBefore={prefixSelector} placeholder='Phone' />
                                                                            </Form.Item>
                                                                        </div>

                                                                        <div className="university">
                                                                            <Form.Item name="university"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your University/Company Name!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder='University/Company Name' />
                                                                            </Form.Item>
                                                                        </div>

                                                                        <div className="message">
                                                                            <Form.Item name="message"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Please input your Message!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder='Message' />
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div className="submit_btn_main_container">
                                                                            <button type="primary" htmlType="submit" className='submit_btn btn_primary'>
                                                                                Submit
                                                                            </button>
                                                                        </div>
                                                                    </Form>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="clip">
                                                            <img src={clip} alt="Clip" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>


                        </div>

                        <div className="menu_button">
                            <div onClick={() => toggleNav()}> <BiMenuAltRight /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;