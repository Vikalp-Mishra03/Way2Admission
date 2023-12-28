import React from 'react'
import android from '../../assets/images/PlayStore.png'
import iphone from '../../assets/images/AppStore.png'
import screen from '../../assets/images/screen.png'

export default function ForApp() {
    return (
        <div className='forApp'>
            <div className="container">
                <div className="left-app">
                    <div className="title">
                        Meet our Experts, other Students & University Representatives on the Leverage Edu Community
                    </div>
                    <div className="para">
                        Available on the web and app. Switch to the app for a faster and better experience
                    </div>

                    <div className="mobile">
                        <div className="img">
                            <img src={android} alt="" />
                        </div>
                        <div className="img">
                            <img src={iphone} alt="" />
                        </div>
                    </div>

                </div>
                <div className="right-app">
                    <div className="back">
                        <img src={screen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
