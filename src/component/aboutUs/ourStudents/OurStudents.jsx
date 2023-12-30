import React from 'react'
import img from '../../../assets/images2/mirage-teamwork.png'
import UK from '../../../assets/images2/UK-flag.svg'
import Canada from '../../../assets/images/Canada-flag.svg'
import USA from '../../../assets/images2/US-flag.svg'
import Australia from '../../../assets/images/Australia-flag.svg'
import Ireland from '../../../assets/images/Ireland-flag.svg'
import India from '../../../assets/images/India-flag.svg'
import Germany from '../../../assets/images/Germany-flag.svg'
import France from '../../../assets/images/France-flag.svg'
import NewZealand from '../../../assets/images/New Zealand-flag.svg'
import Spain from '../../../assets/images2/Spain-flag.svg'
import Italy from '../../../assets/images/Italy-flag.svg'
import Switzerland from '../../../assets/images2/Switzerland-flag.svg'
import Singapore from '../../../assets/images2/Singapore-flag.svg'
import SouthKorea from '../../../assets/images2/South Korea-flag.svg'
import Finland from '../../../assets/images/Finland-flag.svg'
import Belgium from '../../../assets/images/Belgium-flag.svg'
import Poland from '../../../assets/images/Poland-flag.svg'
import Netherlands from '../../../assets/images/Netherlands-flag.svg'


export default function OurStudents() {

    const countryData = [
        {
            img: UK,
            country: 'UK',
            offer: '7000+ offers'
        },
        {
            img: Canada,
            country: 'Canada',
            offer: '4500+ offers'
        },
        {
            img: USA,
            country: 'USA',
            offer: '4000+ offers'
        },
        {
            img: Australia,
            country: 'Australia',
            offer: '1200+ offers'
        },
        {
            img: Ireland,
            country: 'Ireland',
            offer: '1000+ offers'
        },
        {
            img: India,
            country: 'India',
            offer: '9000+ offers'
        },
        {
            img: Germany,
            country: 'Germany',
            offer: '6090+ offers'
        },
        {
            img: France,
            country: 'France',
            offer: '6000+ offers'
        },
        {
            img: NewZealand,
            country: 'New Zealand',
            offer: '0150+ offers'
        },
        {
            img: Spain,
            country: 'Spain',
            offer: '1050+ offers'
        },
        {
            img: Italy,
            country: 'Italy',
            offer: '7000+ offers'
        },
        {
            img: Switzerland,
            country: 'Switzerland',
            offer: '3000+ offers'
        },
        {
            img: Singapore,
            country: 'Singapore',
            offer: '3000+ offers'
        },
        {
            img: SouthKorea,
            country: 'South Korea',
            offer: '3000+ offers'
        },
        {
            img: Finland,
            country: 'Finland',
            offer: '3000+ offers'
        },
        {
            img: Belgium,
            country: 'Belgium',
            offer: '3000+ offers'
        },
        {
            img: Poland,
            country: 'Poland',
            offer: '300+ offers'
        },
        {
            img: Netherlands,
            country: 'Netherlands',
            offer: '300+ offers'
        },
    ]

    return (
        <div className='ourStudents'>
            <div className="container">
                <div className="story">Our Students</div>
                <div className="about-head">Across the globe</div>

                <div className="student">
                    <div className="left-student">
                        <img src={img} alt="" />
                    </div>
                    <div className="right-student">
                        {countryData.map((country, index) => (
                            <div className="card1" key={index}>
                                <img src={country.img} alt={country.country} />
                                <div className="country">{country.country}</div>
                                <div className="offer">{country.offer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
