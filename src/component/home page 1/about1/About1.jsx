import React from 'react'
import tick from '../../../assets/images/image 16.png'
import man from '../../../assets/images/image 13.png'
import girl from '../../../assets/images/image 14.png'
import dot from '../../../assets/images/image 12.png'
import dot1 from '../../../assets/images/image 11.png'
import angle from '../../../assets/images/image 9.png'
export default function About1() {
    return (
        <div className=' about1 mt-5'>
            <div className="about-left">
                <h3 className='font-roboto'>About Us</h3>
                <h1>We Provide Best Education Services For You</h1>

                <div className="slider">
                    <span className="aboutWay font-roboto">
                        <p>About WAY2Admission</p>
                    </span>
                    <span className="ourvision font-roboto">
                        <p>Our Vision</p>
                    </span>
                    <span className="ourmission font-roboto">
                        <p>Our Mission</p>
                    </span>
                </div>

                <div className="aboutwaypara">
                    <div className="para">Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</div>

                    <ul>
                        <li>
                            <img src={tick} alt="" />
                            <p>Magna aliquaenim minim veniam quis nostrud  </p>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <p>Magna aliquaenim minim veniam quis nostrud  </p>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <p>Magna aliquaenim minim veniam quis nostrud  </p>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <p>Magna aliquaenim minim veniam quis nostrud  </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="abouts-right">
                <div className="boy">
                    <img src={man} alt="" />
                </div>
                <div className="girl">
                    <img src={girl} alt="" />
                </div>
                <div className="dot">
                    <img src={dot} alt="" />
                </div>
                <div className="dot1">
                    <img src={dot1} alt="" />
                </div>
                <div className="angle">
                    <img src={angle} alt="" />
                </div>
            </div>
        </div>
    )
}
