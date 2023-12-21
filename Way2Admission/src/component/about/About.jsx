import React from 'react'
import tick from '../../assets/images/image 16.png'
import image from '../../assets/images/image 36.png'
export default function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <h3 className='font-roboto'>About Us</h3>
                <h1>We Provide Best Education Services For You</h1>

                <div className="slider">
                    <div className="aboutWay font-roboto">
                        <p>About WAY2Admission</p>
                    </div>
                    <div className="ourvision font-roboto">
                        <p>Our Vision</p>
                    </div>
                    <div className="ourmission font-roboto">
                        <p>Our Mission</p>
                    </div>
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
            <div className="about-right">
                <div className="img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
