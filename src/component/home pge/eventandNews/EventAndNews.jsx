import React, { useRef, useState } from 'react'
import rectangle from '../../../assets/images/Rectangle 49.png'
import circle from '../../../assets/images/image 21.png'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="para">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};


export default function EventAndNews() {

    const eventData = [
        {
            img: rectangle,
            title: 'Our students share their stories...',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
            date: '11',
            month: 'Dec',
        },
        {
            img: rectangle,
            title: 'Our students share their stories...',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
            date: '11',
            month: 'Dec',
        },
        {
            img: rectangle,
            title: 'Our students share their stories...',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
            date: '11',
            month: 'Dec',
        },
        {
            img: rectangle,
            title: 'Our students share their stories...',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
            date: '11',
            month: 'Dec',
        },
        {
            img: rectangle,
            title: 'Our students share their stories...',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
            date: '11',
            month: 'Dec',
        },
    ]

    const scrollContainerRef = useRef(null);

    const handleScroll = (evt) => {
        evt.preventDefault();
        const delta = Math.max(-1, Math.min(1, evt.deltaY));
        scrollContainerRef.current.scrollLeft += delta * 40;
        scrollContainerRef.current.style.scrollBehavior = 'auto';
    };


    return (
        <div className='eventAndNews'>
            <div className="small-text">Lorem Ipsum is dummy text</div>
            <div className="heading">EVENTS & NEWS</div>


            <img src={circle} className='circle' alt="" />
            <div className="event-card" ref={scrollContainerRef} onWheel={handleScroll}>
                {eventData.map((event, index) => (
                    <div className="event" key={index}>
                        <div className="img">
                            <img src={event.img} alt="" />
                        </div>
                        {/* <div className="border">
                            <div className="data">
                                <div className="date">{event.date}</div>
                                <div className="month">{event.month}</div>
                            </div>
                        </div> */}
                        <div className="title">{event.title}</div>
                        <ReadMore>{event.para}</ReadMore>
                        <div className="link">
                            <a href="#">Learn More</a>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1f4282" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
