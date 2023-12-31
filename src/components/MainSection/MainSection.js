import React, { useEffect, useState } from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsFillSendFill } from 'react-icons/bs';
import useCountDown from '../../Hook/useCountDown';
import './MainSection.css';

const MainSection = () => {
    const { textDays, textHours, textMinutes, textSeconds, gap } = useCountDown();

    const [countDownValue, setCountDownValue] = useState({ textDays, textHours, textMinutes, textSeconds });

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDownValue({ textDays, textHours, textMinutes, textSeconds });

            if (gap <= 0) {
                clearInterval(interval);
            }

        }, 1000);

        return () => clearInterval(interval);

    }, [textDays, textHours, textMinutes, textSeconds, gap]);

    return (
        <main className='main-container desktop-max'>
            <div className='socials'>
                <ul>
                    <li><a href='/'><AiFillFacebook></AiFillFacebook></a></li>
                    <li><a href='/'><AiFillTwitterSquare></AiFillTwitterSquare></a></li>
                    <li><a href='/'><BiLogoLinkedinSquare></BiLogoLinkedinSquare></a></li>
                </ul>
            </div>

            <div className='main-content'>
                <h1 className='title'>
                    Under Construction
                </h1>
                <p>Welcome to codestation, where innovation meets code. We are a dynamic software development company dedicated to crafting cutting-edge solutions that redefine industries. With a passion for pushing technological boundaries. Our team of seasoned developers and designers are committed to creating seamless, user-centric experiences that drive success for businesses large and small.</p>

                <div className='news-letter'>
                    <input type='email' placeholder='Your email address' />
                    <button className='btn' title='Send me update'><BsFillSendFill></BsFillSendFill></button>
                </div>
            </div>

            <div className='count-down'>
                <div className='count-time days'>
                    <p className='time'>{countDownValue.textDays}</p>
                    <p>days</p>
                </div>

                <div className='count-time hours'>
                    <p className='time'>{countDownValue.textHours}</p>
                    <p>hours</p>
                </div>

                <div className='count-time minutes'>
                    <p className='time'>{countDownValue.textMinutes}</p>
                    <p>minutes</p>
                </div>

                <div className='count-time seconds'>
                    <p className='time'>{countDownValue.textSeconds}</p>
                    <p>seconds</p>
                </div>
            </div>
        </main>
    );
};

export default MainSection;