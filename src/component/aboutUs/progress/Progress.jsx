import React from 'react'
import college from '../../../assets/images/image 42.png'
import student from '../../../assets/images/image 30.png'
import couselling from '../../../assets/images/image 41.png'
import user from '../../../assets/images/image 40.png'

export default function Progress() {

    const progressData = [
        {
            img: college,
            number: '25,000+',
            title: 'Students',
            para: 'received offers from top universities in UK, US, Australia, Canada & more'
        },
        {
            img: student,
            number: '650+',
            title: 'University Partners',
            para: 'abroad for seamless application submission and student experience'
        },
        {
            img: couselling,
            number: '2 Million+',
            title: 'Counsellings',
            para: 'in the last 6 years of our existence, growing at a 150,000+ every month today'
        },
        {
            img: user,
            number: '120 Million+',
            title: 'Users',
            para: 'who browsed the platform last year across our wide range of products'
        },
    ]
    return (
        <div className='progress'>
            <div className="container">
                <div className="story">Our Progress</div>
                <div className="about-head white">So Far</div>

                <div className="progress-cards">
                    {progressData.map((item, index) => (
                        <div className="progress-card" key={index}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="number">{item.number}</div>
                            <div className="title">{item.title}</div>
                            <div className="para">{item.para}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
