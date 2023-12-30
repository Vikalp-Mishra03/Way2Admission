import React from 'react'
import banner from '../../../assets/images2/aboutusbgweb.png'

export default function AboutBanner() {
    return (
        <div className='upperBanner'>
            <div className="banner">
                <img src={banner} alt="" />

                <div className="banner-text">
                    <h1>ABOUT US</h1>
                    <span>Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate </span>
                    <br />
                </div>
            </div>
        </div>
    )
}
