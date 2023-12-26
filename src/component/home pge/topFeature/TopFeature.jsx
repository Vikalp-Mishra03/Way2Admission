import React, { useState } from 'react'
import card1 from '../../../assets/images/woman playing laptop on_5315939 1 (1).png'
import card2 from '../../../assets/images/woman playing laptop on_5315939 1 (2).png'
import card3 from '../../../assets/images/woman playing laptop on_5315939 1.png'


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


export default function TopFeature() {

    const cards = [
        {
            img: card3,
            title: 'Lorem Ipsum is dummy text',
            para: 'Explore the most sorted-out personalized career counselling sessions as per your preference and potential. Our experienced team helps to get admission at the most convenient and renowned institutes. From form filling to post-admission assistance, every single step is guided by our expert team of counsellors.'
        },
        {
            img: card1,
            title: 'Lorem Ipsum is dummy text',
            para: 'Explore the most sorted-out personalized career counselling sessions as per your preference and potential. Our experienced team helps to get admission at the most convenient and renowned institutes. From form filling to post-admission assistance, every single step is guided by our expert team of counsellors.'
        },
        {
            img: card2,
            title: 'Lorem Ipsum is dummy text',
            para: 'Explore the most sorted-out personalized career counselling sessions as per your preference and potential. Our experienced team helps to get admission at the most convenient and renowned institutes. From form filling to post-admission assistance, every single step is guided by our expert team of counsellors.'
        },
    ]
    return (
        <div className='topFeature '>
            <h3 className='heading'>Our Top Class Features</h3>
            <p className=''>Building Strong Foundations That Empowers Young Mind Unraveling Learning In Our Educational Environment
            </p>

            <div className="box">
                {cards.map((card, index) => (
                    <div className="card-2" key={index}>
                        <div className="img">
                            <img src={card.img} alt={`Card ${index + 1}`} />
                        </div>
                        <div className="title">{card.title}</div>
                        <ReadMore className="para">{card.para}</ReadMore>
                        <div className='link'>
                            <a href="#" className='learn'>Learn More</a>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1f4282" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
