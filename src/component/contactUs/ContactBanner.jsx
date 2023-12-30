import React from 'react'
import contact from '../../assets/images2/aboutusbgweb.png'
export default function ContactBanner() {
    return (
        <div className='contactBanner'>
            <div className="background-img">
                <img src={contact} alt="" />

                <div className="title">
                    CONTACT US
                </div>
            </div>
        </div>
    )
}
