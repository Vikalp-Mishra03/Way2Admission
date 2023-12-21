import React from 'react'
import icon from '../../assets/images/image 37.png'
export default function Cards() {

    const cardData = [
        {
            icon: icon,
            title: 'Personalized Career Counselling',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        },
        {
            icon: icon,
            title: 'Personalized Career Counselling',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        },
        {
            icon: icon,
            title: 'Personalized Career Counselling',
            para: 'Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate '
        }
    ]
    return (
        <div className='cards'>
            {cardData.map((card, index) => (
                <div className='card' key={index}>
                    <img src={card.icon} alt={`Icon ${index}`} />
                    <h3 className='font-roboto'>{card.title}</h3>
                    <p>{card.para}</p>
                </div>
            ))}
        </div>
    )
}
