import React from 'react'
import college from '../../assets/images/aboutusbgweb.png'
export default function Enquiry() {

    const touchData = [
        {
            address: 'Uttar Pradesh',
            addresses: 'Address',
            add: 'P.O. XYZ Nagar, Uttar Pradesh - 248007',
            timing: 'Timing 9:30 am to 5: 30 pm',

            contact: 'Contact Info',
            phone1: '+91 00022 00222',
            phone2: '+91 00022 00222',

            campus: 'Schools At Campus',
            campus1: 'School of Advanced Engineering',
            campus2: 'School of Computer Science',
            campus3: 'School of Design',
            campus4: 'School of Health Sciences & Technology',
        },
        {
            address: 'New Delhi',
            addresses: 'Address',
            add: 'P.O. XYZ Nagar,New delhi - 248007',
            timing: 'Timing 9:30 am to 5: 30 pm',

            contact: 'Contact Info',
            phone1: '+91 00022 00222',
            phone2: '+91 00022 00222',

            campus: 'Schools At Campus',
            campus1: 'School of Advanced Engineering',
            campus2: 'School of Computer Science',
            campus3: 'School of Design',
            campus4: 'School of Health Sciences & Technology',
        },
    ]

    return (
        <div className='contact-us'>
            <div className="container">
                <div className="contact-heading">
                    Contact Us
                </div>

                <div className="small-nav">

                    <ul>
                        <li><a href="#touch">Get in Touch</a></li>
                        <li><a href="#locate">Locate Us</a></li>
                        <li><a href="#enquiry">Enquiry Form</a></li>
                    </ul>
                </div>

                <div className="info">
                    <div className="nav-heading" id='touch'>
                        Get in Touch With Us
                    </div>
                    {touchData.map((location, index) => (
                        <div className="touch-info" key={index}>
                            <div className="address">
                                {location.address}


                                <div className="info-container" >
                                    <div className="left">
                                        <div className="small addresses">{location.addresses}</div>
                                        <div className="add smaller">{location.add}</div>
                                        <div className="timing smaller">{location.timing}</div>
                                    </div>
                                    <div className="middle">
                                        <div className="small contact">{location.contact}</div>
                                        <div className="phone1 smaller">{location.phone1}</div>
                                        <div className="phone2 smaller">{location.phone2}</div>
                                    </div>
                                    <div className="right">
                                        <div className="small campus">{location.campus}</div>
                                        <div className="campus1 smaller">{location.campus1}</div>
                                        <div className="campus2 smaller">{location.campus2}</div>
                                        <div className="campus3 smaller">{location.campus3}</div>
                                        <div className="campus4 smaller">{location.campus4}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="contactUs">
                <div className="contain">
                    <div className="left">
                        <div className="form-wrapper">
                            <div className="contact-heading">
                                <h1 id='enquiry'>Enquiry Form <span>.</span></h1>
                                <p className='text'>Or reach us via: <a href="mailto:someone@example.com">someone@example.com</a></p>
                            </div>

                            <form className='contact-form'>
                                <div className="input-wrap">
                                    <input className='contact-input' autoComplete='off' name='First Name' required type="text" placeholder='First Name' />

                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                        <path fill="#606e85" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                    </svg>
                                </div>
                                <div className="input-wrap">
                                    <input className='contact-input' autoComplete='off' name='Last Name' required type="text" placeholder='Last Name' />

                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                        <path fill="#606e85" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                    </svg>
                                </div>
                                <div className="input-wrap w-100">
                                    <input className='contact-input' autoComplete='off' name='Mail' required type="mail" placeholder='Email' />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#5a6a87" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                </div>

                                <div className="input-wrap textarea w-100">
                                    <textarea name="Message" autoComplete='off' className='contact-input' required placeholder='Message' ></textarea>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#576d94" d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" /></svg>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-wrapper">
                            <img src={college} alt="" />
                        </div>

                    </div>
                </div>
                <div className="wave">
                    <svg id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,392L13.3,400.2C26.7,408,53,425,80,392C106.7,359,133,278,160,220.5C186.7,163,213,131,240,106.2C266.7,82,293,65,320,89.8C346.7,114,373,180,400,236.8C426.7,294,453,343,480,310.3C506.7,278,533,163,560,163.3C586.7,163,613,278,640,277.7C666.7,278,693,163,720,122.5C746.7,82,773,114,800,155.2C826.7,196,853,245,880,269.5C906.7,294,933,294,960,310.3C986.7,327,1013,359,1040,318.5C1066.7,278,1093,163,1120,98C1146.7,33,1173,16,1200,81.7C1226.7,147,1253,294,1280,310.3C1306.7,327,1333,212,1360,138.8C1386.7,65,1413,33,1440,81.7C1466.7,131,1493,261,1520,269.5C1546.7,278,1573,163,1600,171.5C1626.7,180,1653,310,1680,367.5C1706.7,425,1733,408,1760,408.3C1786.7,408,1813,425,1840,359.3C1866.7,294,1893,147,1907,73.5L1920,0L1920,490L1906.7,490C1893.3,490,1867,490,1840,490C1813.3,490,1787,490,1760,490C1733.3,490,1707,490,1680,490C1653.3,490,1627,490,1600,490C1573.3,490,1547,490,1520,490C1493.3,490,1467,490,1440,490C1413.3,490,1387,490,1360,490C1333.3,490,1307,490,1280,490C1253.3,490,1227,490,1200,490C1173.3,490,1147,490,1120,490C1093.3,490,1067,490,1040,490C1013.3,490,987,490,960,490C933.3,490,907,490,880,490C853.3,490,827,490,800,490C773.3,490,747,490,720,490C693.3,490,667,490,640,490C613.3,490,587,490,560,490C533.3,490,507,490,480,490C453.3,490,427,490,400,490C373.3,490,347,490,320,490C293.3,490,267,490,240,490C213.3,490,187,490,160,490C133.3,490,107,490,80,490C53.3,490,27,490,13,490L0,490Z"></path></svg>
                </div>
            </div>

            <div className="container">
                <div className="info">
                    <div className="nav-heading" id='locate'>
                        Locate Us
                    </div>

                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883813!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703834054376!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}   