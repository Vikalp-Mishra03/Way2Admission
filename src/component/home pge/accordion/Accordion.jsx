import React, { useState } from 'react'
import img5 from '../../../assets/images2/image 5.png'

export default function Accordion() {


    const accordionData = [

        {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries",
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries",
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries",
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries",
        },
    ]


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='accordion'>
            <div className="left-accor">
                <h1>Why Choose Way2Admission?</h1>

    
                <div className='accord'>
                    {accordionData.map((item, index) => (
                        <div className="accor-box" key={index}>
                            <div className="question" onClick={() => toggleAccordion(index)}>
                                <h4>{item.question}</h4>
                            </div>
                            {activeIndex === index && (
                                <div className="answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <div className="right-img">
                <img src={img5} alt="" />
            </div>
        </div>
    )
}
