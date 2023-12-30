import React from 'react'

export default function MissAnything() {
    return (
        <div className='missAnything'>
            <div className="container">
                <div className="miss-heading">
                    Don't want to miss anything?
                </div>
                <div className="para">Get weekly updates on the newest book stories, writing skills and tips right in your mailbox.</div>
                <div className="buttons">
                    <input type="mail" placeholder='Enter your email address ' />
                    <div className="button">
                        <a href="#">
                            <button>subscribe</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
