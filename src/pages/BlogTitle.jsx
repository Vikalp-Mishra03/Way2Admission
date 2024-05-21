import React from 'react'
import Publication from '../component/home pge/publication/Publication'
import banner from '../assets/images/blogTitle.png'
import answer1 from '../assets/images/Rectangle 78.png'
import answer2 from '../assets/images/Rectangle 74.png'
import profile from '../assets/images/profile.png'
import profileimg from '../assets/images/220-SM596414-removebg-preview 1.png'

export default function BlogTitle() {

    const blogTitle = [
        {
            question: 'Why do I need to verify my mobile number or email address to log into my webapps account?',
            answer: "WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy that emphasizes the greater realization of the relationship between a brand & its customers. It treats markets as forums for brands and active customers to unite, share and renew each other's resources and capabilities to create value through new forms of interaction, service and learning mechanisms.This kind of communication intends to involve the consumers in brand communication.It discovers innovative ways to connect with the target groups and make them respond to the brand.The entire objective is to uplift the customers from the ‘PASSIVE’ mode and make them active participants in brand communication.WebApps Software Solution We propose a unique model of ‘Communication Co- creation.It is a form of market or business strategy that emphasizes the greater realization of the relationship between a ",
            img: answer1,
        },
        {
            question: 'Why do I need to verify my mobile number or email address to log into my webapps account?',
            answer: "WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy that emphasizes the greater realization of the relationship between a brand & its customers. It treats markets as forums for brands and active customers to unite, share and renew each other's resources and capabilities to create value through new forms of interaction, service and learning mechanisms.",
            img: answer2,
        },
        {
            question: 'Why do I need to verify my mobile number or email address to log into my webapps account?',
            answer: "WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy that emphasizes the greater realization of the relationship between a brand & its customers. It treats markets as forums for brands and active customers to unite, share and renew each other's resources and capabilities to create value through new forms of interaction, service and learning mechanisms.",
        },
        {
    
            answer: "WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy that emphasizes the greater realization of the relationship between a brand & its customers. It treats markets as forums for brands and active customers to unite, share and renew each other's resources and capabilities to create value through new forms of interaction, service and learning mechanisms.",
        },
    ]
    return (
        <div className='blogtitle'>
            <Publication />
            <div className="blog-banner">
                <div className="blog-banner-img">
                    <div className="gradient"></div>
                    <img src={banner} alt="" />
                </div>
                <div className="blog-text">
                    <div className="blog-heading">
                        Blog Title
                    </div>
                    <div className="blog-para">
                        Thank you for your interest in connecting with us. Whether you have a question, need assistance, or want to provide
                    </div>
                    <div className="small-card">
                        <div className="date">02 Jan 2024</div>
                        <div className="name">Mr. Manojit Deb</div>
                        <a href="#">
                            <button className='course'>MBA</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="blog-info">
                <div className="blog-left">
                    {blogTitle.map((blog, index) => (
                        <div className="queries" key={index}>
                            <div className="question">
                                {blog.question}
                            </div>
                            <div className="answer">
                                {blog.answer}
                            </div>
                            <div className="answer-img">
                                <img src={blog.img} alt="" />
                            </div>
                        </div>
                    ))}


                </div>


                <div className="blog-right">
                    <div className="profile-card">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={profile} alt="" />
                            </div>
                            <div className="profile-name">
                                <div className="first-name">
                                    Mr. Manojit Deb
                                </div>
                                <div className="expert">
                                    MBBS Special Abroad Expert
                                </div>
                            </div>
                        </div>
                        <div className="profile-about">
                            In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the  In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the
                        </div>
                        <div className="profile-course-info">
                            <a href="#">
                                <button>MBA</button>
                            </a>
                            <a href="#">
                                <button>MBA</button>
                            </a>
                            <a href="#">
                                <button>28 BLOG</button>
                            </a>
                            <a href="#">
                                <button>Since</button>
                            </a>
                        </div>

                    </div>
                    <div className="blog-profile">
                        <img src={profileimg} alt="" />
                    </div>

                    <div className="buttons">
                        <a href="#">
                            <button>
                                Related Tags
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                Related Tags
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                Related Tags
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                Related Tags
                            </button>
                        </a>
                    </div>
                    <div className="profile-card">
                        <div className="profile">
                            <div className="profile-img">
                                <img src={profile} alt="" />
                            </div>
                            <div className="profile-name">
                                <div className="first-name">
                                    Mr. Manojit Deb
                                </div>
                                <div className="expert">
                                    MBBS Special Abroad Expert
                                </div>
                            </div>
                        </div>
                        <div className="profile-about">
                            In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the  In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the
                        </div>
                        <div className="profile-course-info">
                            <a href="#">
                                <button>MBA</button>
                            </a>
                            <a href="#">
                                <button>MBA</button>
                            </a>
                            <a href="#">
                                <button>28 BLOG</button>
                            </a>
                            <a href="#">
                                <button>Since</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
