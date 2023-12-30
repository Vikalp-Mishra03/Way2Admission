import React from 'react'
import logo1 from '../../../assets/images2/image 25.png'
import logo2 from '../../../assets/images2/image 26.png'
import logo3 from '../../../assets/images2/image 27.png'
import logo4 from '../../../assets/images2/image 28.png'
import logo5 from '../../../assets/images2/image 29.png'
import logo6 from '../../../assets/images2/image 30.png'
import trophy from '../../../assets/images/displayleveragelive.svg'
export default function OurOffering() {

    const offeringData = [
        {
            img: logo1,
        },
        {
            img: logo2,
        },
        {
            img: logo3,
        },
        {
            img: logo4,
        },
        {
            img: logo5,
        },
        {
            img: logo6,
        },
    ]

    return (
        <div className='offering'>
            <div className="container">
                <div className="story">Our Offerings</div>
                <div className="about-head">
                    We <span className='primary1'>simplify international admissions</span> for students,<br /> universities & our partners
                </div>
                <div className="inner-container">
                    <div className="company">
                        {offeringData.map((offering, index) => (
                            <div className="company-logo" key={index}>
                                <img src={offering.img} alt={`Offering ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="right-container">
                        <div className="img">
                            <img src={trophy} alt="" />
                        </div>
                        <h2>Leverage Live</h2>
                        <div className="para">Helping students ace international tests like IELTS, GRE, GMAT & more by combining the expertise of rockstar teachers with superior technology.</div>

                        <a href="#">
                            <button>
                                <p>Know More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff9500" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
