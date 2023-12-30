import React from 'react'
import policy from '../assets/images2/privacyPolicy.png'

export default function ResponsibleDisclosurePolicy() {
    return (
        <div className="Responsible">
            <div className='terms'>
                <div className="back">
                    <img src={policy} alt="" />
                </div>

            </div>
            <div className="container">
                <div className="termHeading">Responsible Disclosure Policy</div>


                <div className="para1">
                    <div className="para">
                        At Leverage Edu we care deeply about maintaining the trust and confidence that our customers place in us. We understand that protection of customer data is a significant responsibility and requires our highest priority. We therefore take the security of our digital platforms extremely seriously, and we genuinely value the assistance of security researchers and others in the security community to assist in keeping them secure.
                        <br />
                        If you are a security researcher and have discovered a security vulnerability in one of our digital platforms (e.g. websites or mobile applications), we appreciate your cooperation in disclosing it to us in a responsible manner. We will validate and fix confirmed vulnerabilities in accordance with our commitment to security and privacy.
                    </div>
                </div>
                <div className="para1">
                    <div className="para-heading">Reporting</div>
                    <div className="para">Security researchers should exclusively use the form at the end of this page to share the details of any suspected vulnerability, and not any other channel of communication, and include detailed information with steps for us to reproduce the vulnerability.</div>
                </div>
                <div className="para1">
                    <div className="para-heading">COMPLIANCE</div>
                    <div className="para">For a proper cooperative experience, below are the activities which are prohibited under this policy and considered incompliant:</div>

                    <li className='ml-1 para'>
                        Publicly disclosing the details of any identified or alleged vulnerability without express written consent from Leverage Edu
                    </li>
                    <li className='ml-1 para'>
                        Modifying data residing in an account that does not belong to you
                    </li>
                    <li className='ml-1 para'>
                        Accessing or downloading data beyond the minimum required to demonstrate a vulnerability. This should not exceed 1-2 records if at all necessary.
                    </li>
                    <li className='ml-1 para'>
                        Attempting to execute actions that disrupt the availability of our digital assets (e.g. any volumetric or denial of service attacks)
                    </li>
                </div>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIcUfh_df0S-PNCdPwAp2WYWXJP-WCr4ijOo5yc7oPCi1MQQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}
