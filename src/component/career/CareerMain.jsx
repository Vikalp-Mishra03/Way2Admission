import React from 'react'
import banner from '../../assets/images/wave.svg'
import childern from '../../assets/images/icon.svg'

export default function CareerMain() {
    return (
        <div className='careerMain'>
            <div className="img">
                <img src={banner} alt="" />
                <div className="childern">
                    <div className="main-text">
                        <div className="main">
                            Come Aboard The
                            Leverage Edu Rocket-ship
                        </div>
                        <div className="para">Ready to give your career the right boost?</div>
                        <div className="para">Be a part of India's fastest growing ed-tech company!</div>
                    </div>
                    <div className="children-img">
                        <img src={childern} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
