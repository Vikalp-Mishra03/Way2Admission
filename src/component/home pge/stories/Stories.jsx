import React, { useRef } from 'react'
import video1 from '../../../assets/images/video.mp4'
export default function Stories() {

    const scrollContainerRef = useRef(null);

    const handleScroll = (evt) => {
        evt.preventDefault();
        const delta = Math.max(-1, Math.min(1, evt.deltaY));
        scrollContainerRef.current.scrollLeft += delta * 40;
        scrollContainerRef.current.style.scrollBehavior = 'auto';
    };





    return (
        <div className='stories'>
            <div className="left-story">
                <div className="trusted">Trusted Voices</div>
                <div className="story-title">Our students share their stories...</div>

                <br />
                <div className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
            </div>
            <div className="right-story">
                <div className="video-wrap">
                    <div className="video" ref={scrollContainerRef} onWheel={handleScroll}>
                        <div className='vide'>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                  
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls={false}
                                  
                                ></iframe>
                            </div>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls
                                 

                                ></iframe>
                            </div>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls
                                ></iframe>
                            </div>

                        </div>
                        <div className='vide'>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls
                                ></iframe>
                            </div>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls
                                ></iframe>
                            </div>
                            <div className="video-thumbnail">
                                <iframe src={video1}
                                    title='Video'
                                    muted
                                    className="vid"
                                    loop
                                    controls
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
