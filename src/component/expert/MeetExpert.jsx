import React from 'react'
import australia from '../../assets/images/Australia-flag.svg'
import purvi from '../../assets/images2/purtiGrayBg2x.png'
import anusha from '../../assets/images2/anushaColoredBg2x.png'
import ayush from '../../assets/images2/ayushColoredBg2x.png'
import khushboo from '../../assets/images2/khushbooColoredBg2x.png'
import shreya from '../../assets/images2/shreyaColoredBg2x.png'
import rohan from '../../assets/images2/rohanColoredBg2x.png'
import mayank from '../../assets/images2/mayankColoredBg2x.png'
import naina from '../../assets/images2/nainaColoredBg2x.png'
import tanvi from '../../assets/images2/tanviColoredBg2x.png'
import UK from '../../assets/images2/UK-flag.svg'
import Canada from '../../assets/images/Canada-flag.svg'
import Italy from '../../assets/images/Italy-flag.svg'
import India from '../../assets/images/India-flag.svg'
import US from '../../assets/images2/US-flag.svg'


export default function MeetExpert() {

  const expertData = [
    {
      img: purvi,
      fullName: 'Purti Chawla',
      number: '12,000+ students counselled',
      flag: UK,
      flag1: Canada,
      flag2: Italy,
      flag3: australia
    },
    {
      img: anusha,
      fullName: 'Anusha Saraf',
      number: '7000+ students counselled',
      flag: India,
    },
    {
      img: ayush,
      fullName: 'Ayush Rajesh',
      number: '5000+ students counselled',
      flag: UK,
    },
    {
      img: khushboo,
      fullName: 'Khushboo Yadav',
      number: '10,000+ students counselled',
      flag: India,
      flag1: Italy,
    },
    {
      img: shreya,
      fullName: 'Shreya Arora',
      number: '5,000+ students counselled',
      flag: australia,
    },
    {
      img: rohan,
      fullName: 'Roshan Jha',
      number: '7,000+ students counselled',
      flag: US,
    },
    {
      img: mayank,
      fullName: 'Mayank Rawat',
      number: '5,000+ students counselled',
      flag: UK,
    },
    {
      img: naina,
      fullName: 'Naina Verma',
      number: '5000+ students counselled',
      flag: australia,
    },
    {
      img: tanvi,
      fullName: 'Tanvi Jain',
      number: '2000+ students counselled',
      flag: India,
    },

  ]

  return (
    <div className='meetExpert'>
      <div className="container">
        <div className="title">Meet the <span className='primary1'>Top Experts</span></div>

        <div className="para">Ensuring success at every step of your student journey</div>

        <div className="expert-card">
          {expertData.map((expert, index) => (
            <div className="expert-container" key={index}>
              <div className="img">
                <img src={expert.img} alt="" />
              </div>
              <div className="fullName">{expert.fullName}</div>
              <div className="number">{expert.number}</div>
              <div className="country">
                {expert.flag && <img src={expert.flag} alt="" className='flag' />}
                {expert.flag1 && <img src={expert.flag1} alt="" className='flag' />}
                {expert.flag2 && <img src={expert.flag2} alt="" className='flag' />}
                {expert.flag3 && <img src={expert.flag3} alt="" className='flag' />}
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button>
            <a href="#">
              Talk To An Expert
            </a>
          </button>
        </div>
      </div>
    </div>

  )
}
