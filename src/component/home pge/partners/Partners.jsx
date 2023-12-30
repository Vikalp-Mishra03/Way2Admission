import React from 'react'
import left from '../../../assets/images2/image 32.png'
import img1 from '../../../assets/images2/image 24.png'
import img2 from '../../../assets/images2/image 25.png'
import img3 from '../../../assets/images2/image 26.png'
import img4 from '../../../assets/images2/image 27.png'
import img5 from '../../../assets/images2/image 28.png'
import img6 from '../../../assets/images2/image 29.png'
import img7 from '../../../assets/images2/image 30.png'
import img8 from '../../../assets/images2/image 31.png'

export default function Partners() {
    return (
        <div className='partners'>
            <div className="left-img">
                <img src={left} alt="" />
            </div>
            <div className="col">
                <div className="left-col">
                    <div className="small-text">Alliance University's </div>
                    <div className="ourPartner">OUR PARTNERS</div>
                    <div className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
                </div>
                <div className="right-col">
                    <div className="upper-col">
                        <div className="line"></div>
                        <div className="img img1" >
                            <img src={img1} alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="line"></div>
                    </div>

                    <hr />

                    <div className="lower-col">
                        <div className="line"></div>
                        <div className="img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="line"></div>

                        <div className="img">
                            <img src={img6} alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="img">
                            <img src={img7} alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="img">
                            <img src={img8} alt="" />
                        </div>
                        <div className="line"></div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
