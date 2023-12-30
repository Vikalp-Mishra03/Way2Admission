import React from 'react'
import tick from '../../../assets/images2/image 16.png'
import image from '../../../assets/images2/image 36.png'
export default function About() {
    return (
        <div className='about'>
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
            <div className="about-right">
                <div className="img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
