import React from 'react'
import right from '../../assets/images/modern-equipped-computer-lab.jpg'

export default function Future() {
    return (
        <div className='future'>
            <div className="left-future">
                <div className="future-heading">
                    Get <span>insights</span> that help your Future to grow <span>.</span>
                </div>
                <div className="future-para">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </div>
                <div className="future-bottom">
                    <div className="left">
                        <div className="bolds">10K+</div>
                        <div className="company
                ">Companies</div>
                    </div>
                    <div className="left">
                        <div className="bolds">314</div>
                        <div className="company
                ">Templates</div>
                    </div>
                    <div className="left">
                        <div className="bolds">12M+</div>
                        <div className="company
                ">Queries</div>
                    </div>
                </div>
            </div>
            <div className="right-future">
                <div className="img">
                    <img src={right} alt="" />
                    {/* <div className="background-color"></div> */}
                </div>
            </div>
        </div>
    )
}
