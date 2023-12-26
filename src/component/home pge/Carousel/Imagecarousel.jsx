import React, { useRef } from 'react'
import '../../../assets/sass/carousel/Imagecarousel.scss'
import img1 from '../../../assets/images/Rectangle 59.png'
import img2 from '../../../assets/images/rectangle1.jpg'
const Imagecarousel = () => {

    const carouselData = [

        {
            img: img1,
            small: '',
            title: 'Passport To Your Dream College',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        },
        {
            img: img1,
            small: 'Lorem Ipsum is dummy text l',
            title: 'Passport To Your Dream College',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        },
        {
            img: img1,
            small: 'Lorem Ipsum is dummy text l',
            title: 'Passport To Your Dream College',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        }
    ]

    const boxRef = useRef(null);

    const btnpressprev = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth;
            box.scrollLeft -= width;
            console.log(width);
        }
    };

    const btnpressnext = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth;
            box.scrollLeft += width;
            console.log(width);
        }
    };

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path fill="#f5841f" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            </p></button>

            <button className="next-btn" onClick={btnpressnext}><p><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path fill="#f5841f" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></p>
            </button>


            <div className="product-container" ref={boxRef}>
                {carouselData.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.img} alt={`Image ${index}`} />
                    </div>
                ))}

                <div className="text">
                    <div className="small">Lorem Ipsum is dummy text l</div>
                    <h3>Passport To Your Dream College</h3>
                    <p>Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate </p>
                </div>
            </div>
        </div>
    )
}

export default Imagecarousel

