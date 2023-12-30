import React from 'react'
import boy from '../../../assets/images2/image 13.png'
export default function OurStories() {
    return (
        <div className='ourStories'>
            <div className="container">
                <div className="about-left">
                    <div className="story">About Us</div>
                    <h1>This is Us</h1>
                    <p className='para'>
                        Way 2 helps students figure what they should do and where they should be at - wherever that be in the world - to realise their full potential. It helps students navigate & assess their journey thus far, matches them to personalised mentors, counsels them towards their higher education dream with an employability lens, and makes sure that everyone punched way above their weight to make dreams come alive and truly be able to level up.
                    </p>
                    <a href="#">
                        <button>
                            <p>Know More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff9500" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                        </button>
                    </a>
                </div>
                <div className="about-right">
                    <div className="boy">
                        <img src={boy} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
