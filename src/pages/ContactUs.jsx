import React, { useEffect } from 'react'

import ContactBanner from '../component/contactUs/contactBanner'
import Enquiry from '../component/contactUs/enquiry'

export default function ContactUs() {

    useEffect(() => {
        const inputFields = document.querySelectorAll('.contact-input');

        const handleFocus = (e) => {
            e.target.parentNode.classList.add('focus');
            e.target.parentNode.classList.add('not-empty');
        };

        const handleBlur = (e) => {
            e.target.parentNode.classList.remove('focus');
        };

        inputFields.forEach((input) => {
            input.addEventListener('focus', handleFocus);
            input.addEventListener('blur', handleBlur);
        });

        return () => {
            inputFields.forEach((input) => {
                input.removeEventListener('focus', handleFocus);
                input.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <div >
            <ContactBanner />
            <Enquiry /> 
            {/* <div className="contactUs">
                <div className="container">
                    <div className="left">
                        <div className="form-wrapper">
                            <div className="contact-heading">
                                <h1>Contact Us <span>.</span></h1>
                                <p className='text'>Or reach us via: <a href="mailto:someone@example.com">someone@example.com</a></p>
                            </div>

                            <form className='contact-form'>
                                <div className="input-wrap">
                                    <input className='contact-input' autoComplete='off' name='First Name' required type="text" />
                                    <label >First Name</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                        <path fill="#606e85" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                    </svg>
                                </div>
                                <div className="input-wrap">
                                    <input className='contact-input' autoComplete='off' name='Last Name' required type="text" />
                                    <label >Last Name</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                        <path fill="#606e85" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                    </svg>
                                </div>
                                <div className="input-wrap w-100">
                                    <input className='contact-input' autoComplete='off' name='Mail' required type="mail" />
                                    <label >Email</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#5a6a87" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                </div>

                                <div className="input-wrap textarea w-100">
                                    <textarea name="Message" autoComplete='off' className='contact-input' required ></textarea>
                                    <label>Message</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#576d94" d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"/></svg>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div> */}

      
        </div>
    )
}






























{/* <section className="location-map">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.0301266067!2d77.12658443700003!3d28.527478163319785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703765033733!5m2!1sen!2sin"
    width="600" height="450" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</section> */}