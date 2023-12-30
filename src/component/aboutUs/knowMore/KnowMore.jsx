import React from 'react'
import more1 from '../../../assets/images2/more1.jpeg'
import more2 from '../../../assets/images2/more2.png'
import more3 from '../../../assets/images2/more3.png'

export default function KnowMore() {

    const moreData = [
        {
            img: more1,
            title: "Thank God It's Satuarday",
        },
        {
            img: more2,
            title: "Public Policy",
        },
        {
            img: more3,
            title: "News",
        },
    ]
    return (
        <div className='knowMore'>
            <div className="container">
                <div className="story">Know More</div>
                <div className="about-head white">
                    About our people & our work
                </div>

                <div className="more-card">
                    {moreData.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="title">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
