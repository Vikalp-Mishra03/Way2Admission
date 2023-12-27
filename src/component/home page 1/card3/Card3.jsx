import React from 'react'


const bottomCard = [
    {
        num: '45.9K',
        enroll: 'STUDENT ENROLL'
    },
    {
        num: '899',
        enroll: 'Top University'
    },
    {
        num: '45.9K',
        enroll: 'STUDENT ENROLL'
    },
    {
        num: '45.9K',
        enroll: 'STUDENT ENROLL'
    }
]

export default function Card3() {
    return (
        <div className="card3">


            <div className="bottom-card">
                {bottomCard.map((item, index) => (
                    <div className="card-1" key={index}>
                        <div className="number">
                            <div className="num">{item.num}</div>
                            <div className="enroll">{item.enroll}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
