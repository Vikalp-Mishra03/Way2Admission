import React from 'react'
import video from '../../../assets/images/nature.mp4'
export default function Video() {
    return (
        <div className='videos'>
            <div className="vide">
                <div className="video-thumbnail">
                    <iframe src={video}
                        title='Video'
                        muted
                        className="vid"
                        loop
                        controls={false}
                    ></iframe>
                </div>

                <div className="text">
                    <h1>We're Qeducato & We're Diffirent </h1>

                    <p>Our community is being called to reimagine the future. As the only university where a renowned design school colleges
                    </p>
                </div>
            </div>
            <div className="getInTouch">
                <div className="inner-layer">

                    <div className="left">
                        <div className="small-text">Get In Touch</div>
                        <div className="mail">info@webappssoft.com</div>
                    </div>
                    <div className="middle">
                        <div className="border1">
                            <div className="border2">
                                OR
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="small-text">Get In Touch</div>
                        <div className="mail">info@webappssoft.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
