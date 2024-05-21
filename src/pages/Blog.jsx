import React from 'react'
import Publication from '../component/home pge/publication/Publication'
import banner from '../assets/images/Rectangle 591.png'
import rectangle1 from '../assets/images/Rectangle 75.png'
import rectangle2 from '../assets/images/Rectangle 75 (1).png'
import rectangle3 from '../assets/images/Rectangle 75 (2).png'
import rectangle4 from '../assets/images/Rectangle 80.png'
import rectangle5 from '../assets/images/Rectangle 80 (1).png'
import rectangle6 from '../assets/images/Rectangle 80 (2).png'
import { NavLink } from 'react-router-dom'


export default function Blog() {

    const cardData = [
        {
            img: rectangle1,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
        {
            img: rectangle2,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
        {
            img: rectangle3,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
        {
            img: rectangle4,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
        {
            img: rectangle5,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
        {
            img: rectangle6,
            date: '02 Jan 2024',
            name: 'Mr. Manojit Deb',
            course: 'MBA',
            heading: 'Welcoming Diverse Academic Backgrounds for Admission',
            para: 'In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. ',
        },
    ]

    return (
        <div className='blog'>
            <Publication />
            <div className="blog-banner">
                <div className="blog-banner-img">
                    <div className="gradient"></div>
                    <img src={banner} alt="" />
                </div>
                <div className="blog-text">
                    <div className="blog-heading">
                        Blog
                    </div>
                    <div className="blog-para">
                        Thank you for your interest in connecting with us. Whether you have a question, need assistance, or want to provide
                    </div>
                </div>
            </div>
            <div className="blog-cards">
                {cardData.map((card, index) => (
                    <div className="blog-card" key={index}>
                        <div className="blog-card-img">
                            <img src={card.img} alt="" />
                            <div className="small-card">
                                <div className="date">{card.date}</div>
                                <div className="name">{card.name}</div>
                                <a href="#">
                                    <button className='course'>{card.course}</button>
                                </a>
                            </div>
                        </div>
                        <div className="blog-text1">
                            <h2 >{card.heading}</h2>
                            <div className="card-para">{card.para}</div>
                            <NavLink to='/blogTitle' className='readMore'>
                                <p>Read More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff7300" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                            </NavLink>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
