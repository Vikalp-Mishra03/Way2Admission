import React from 'react'
import bcimg from '../../assets/images/Rectangle54.png'
import img1 from '../../assets/images/image 42.png'
import img2 from '../../assets/images/image 40.png'
import img3 from '../../assets/images/image 41.png'
import img4 from '../../assets/images/image 35.png'
import img5 from '../../assets/images/image 35 (1).png'
export default function WhyChoose() {

    const card = [
        {
            img: img1,
            title: 'Career & College Guidance',
            para: 'Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.Magn ',
        },
        {
            img: img2,
            title: 'Career & College Guidance',
            para: 'Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.Magn ',
        },
        {
            img: img3,
            title: 'Career & College Guidance',
            para: 'Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.Magn ',
        },
    ]

    const bottomCard = [
        {
            img: img4,
            num: '45.9K',
            enroll: 'STUDENT ENROLL'
        },
        {
            img: img2,
            num: '45.9K',
            enroll: 'STUDENT ENROLL'
        },
        {
            img: img5,
            num: '45.9K',
            enroll: 'STUDENT ENROLL'
        }
    ]
    return (
        <div className='whyChoose'>
            <div className="bc-img">
                <img src={bcimg} alt="" style={{position:'absolute'}}/>
                <div className="inner">
                    <h3>Why Choose</h3>
                    <h1>Way2Admission?</h1>


                    <div className="serviceCard">
                        {card.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="img">
                                    <img src={item.img} alt={`Card ${index}`} />
                                </div>
                                <div className='a'>
                                    <h4>{item.title}</h4>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border"></div>
                    </div>

                    <div className="bottom-card">
                        {bottomCard.map((item, index) => (
                            <div className="card-1" key={index}>
                                <div className="img">
                                    <img src={item.img} alt={`Bottom Card ${index}`} />
                                </div>
                                <div className="number">
                                    <div className="num">{item.num}</div>
                                    <div className="enroll">{item.enroll}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
