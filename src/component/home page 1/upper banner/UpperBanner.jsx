import React from 'react'
import banner from '../../../assets/images2/Rectangle 6.png'
import student from '../../../assets/images2/pngwing 2.png'
export default function UpperBanner() {
    return (
        <div className='upperBanner'>
            <div className="banner">
                <img src={banner} alt="" />
                <div className="student">
                    <img src={student} alt="" />
                </div>
                <div className="banner-text">
                    <h1>Passport To Your Dream College</h1>
                    <span>Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn about its history, usage, variations and sources, and how to generate </span>
                    <br />
                    <button>
                        <a href="#">
                            <span>Know More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
