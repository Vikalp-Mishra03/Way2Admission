import React from 'react'
import banner from '../../assets/images2/bannerBg2x.jpg'
import coach from '../../assets/images2/coachDesktop22x.png'

export default function ExpertUpper() {
    return (
        <div className='expertUpper'>
            <div className="container">
                <div className="img">
                    <img src={banner} className='banner' alt="" />
                    <div className="coach-img">
                        <img src={coach} className='coach' alt="" />
                    </div>
                </div>

                <div className="coun">
                    <h1>
                        Connect with Our Top Counsellors for Personalised Support
                    </h1>
                    <p>And start your study abroad journey today</p>
                    <button>
                        <a href="#">Start Your Journey</a>
                    </button>
                    <div className="para">
                        200,000+ counsellings being done every month
                    </div>
                </div>
            </div>
        </div>
    )
}
