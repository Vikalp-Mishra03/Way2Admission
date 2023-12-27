import React, { useEffect, useRef } from 'react'
import right from '../../../assets/images/image 6.png'
import left from '../../../assets/images/image 7.png'
import college from '../../../assets/images/Rectangle 42.png'



export default function Admission() {


    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleWheel = (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            scrollContainer.style.scrollBehavior = 'auto';
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className='admission'>
            <div className="angle">
                <div className="right-angle">
                    <img src={right} alt="" />
                </div>
                <div className="left-angle">
                    <img src={left} alt="" />
                </div>
            </div>
            <div className="heading2 white">
                Why Choose Way2Admission?
            </div>
            <div className="para">
                Building Strong Foundations That Empowers Young Minds.Unraveling Learning In Our Educational Environment

            </div>

            <div className="gallery-wrap">
                <div className="gallery" ref={scrollContainerRef}>
                    <div>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                    </div>
                    <div>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                        <span><img src={college} />
                            <div className="border">College Name/ University Name</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
