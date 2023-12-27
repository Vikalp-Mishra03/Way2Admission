import React from 'react'
import nb from '../../../assets/images/nbventures.png'
import unicorns from '../../../assets/images/9unicorns.png'
import bennettcoleman from '../../../assets/images/bennettcoleman.png'
import lodhalogo from '../../../assets/images/lodhalogo.png'
import mankind1 from '../../../assets/images/mankind1.png'
import cgc from '../../../assets/images/cgc.png'
import Indorama from '../../../assets/images/Indorama.png'
import vicco from '../../../assets/images/vicco.png'
import urmin from '../../../assets/images/urmin.png'
import baldota from '../../../assets/images/baldota.png'
import chonafamilyoffice2 from '../../../assets/images/chonafamilyoffice2.png'
import singhularityventures from '../../../assets/images/singhularityventures.png'



export default function Companies() {

    const companiesData = [
        {
            img: nb
        },
        {
            img: unicorns
        },
        {
            img: bennettcoleman
        },
        {
            img: lodhalogo
        },
        {
            img: mankind1
        },
        {
            img: cgc
        },
        {
            img: Indorama
        },
        {
            img: vicco
        },
        {
            img: urmin
        },
        {
            img: baldota
        },
        {
            img: chonafamilyoffice2
        },
        {
            img: singhularityventures
        },
    ]
    return (
        <div className='companies'>
            <div className="container">
                {companiesData.map((company, index) => (
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={company.img} alt={`Company ${index}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
