import React from 'react'
import img1 from '../../assets/images/icons8-kolkata-100 1 (1).png'
import img2 from '../../assets/images/icons8-kolkata-100 1 (3).png'
import img3 from '../../assets/images/icons8-kolkata-100 1 (4).png'
import img4 from '../../assets/images/icons8-kolkata-100 1.png'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
export default function Footer() {

    const place = [
        {
            img: img4,
            state: 'Kolkata Office',
            add: '15C, Sarat Bose Road, Bhowanipore, 700 020',
            mail: 'admissions@way2admission.in',
            mobile: '+91 9038602888   +91 9038602888'
        },
        {
            img: img1,
            state: 'Delhi Office',
            add: '15C, Sarat Bose Road, Bhowanipore, 700 020',
            mail: 'admissions@way2admission.in',
            mobile: '+91 9038602888   +91 9038602888'
        },
        {
            img: img3,
            state: 'Pune Office',
            add: '15C, Sarat Bose Road, Bhowanipore, 700 020',
            mail: 'admissions@way2admission.in',
            mobile: '+91 9038602888   +91 9038602888'
        },
        {
            img: img2,
            state: 'Siliguri Office',
            add: '15C, Sarat Bose Road, Bhowanipore, 700 020',
            mail: 'admissions@way2admission.in',
            mobile: '+91 9038602888   +91 9038602888'
        },
    ]
    return (
        <div className='footer'>
            <div className="place">
                {place.map((office, index) => (
                    <div className="place-card" key={index}>
                        <div className="img">
                            <img src={office.img} alt={`Office ${index + 1}`} />
                        </div>
                        <div className="address">
                            <div className="state">{office.state}</div>
                            <p className='add'>{office.add}</p>
                            <p className='mail'>{office.mail}</p>
                            <p className='mobile'>{office.mobile}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lower-footer">


                <div className="col-1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="para">Explore the most simplified admission assistance at Way2Admission. Guiding talents to make them reach the peak of success with personalized professional career counseling sessions under expert teams. With 22+ years of industry presence, we’re standing tall as one of the leading career consultancies in India.</div>
                </div>
                <div className="main-col">
                    <div className="col-2">
                        <div className="links">Quick Links</div>
                        <ul>
                            <li><NavLink to="/contact" className='white'>Contact Us</NavLink></li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="links">Study Destination</div>
                        <ul>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="links">Important Links</div>
                        <ul>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <div className="links">Other Links</div>
                        <ul>
                            <li><NavLink to="/termsAndCondition" className='white'>Terms and Condition</NavLink></li>
                            <li><NavLink to="/privacyPolicy" className='white'>Privacy Policy</NavLink></li>
                            <li>
                            <NavLink to="/responsible" className='white'>Responsible Disclosure Policy</NavLink>
                            </li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                            <li>Mega Menu 1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="line"></div>
                <div className="box">
                    © 2023 Way2 Admission. All Rights Reserved Managed By WASS
                </div>
            </div>
        </div>
    )
}
