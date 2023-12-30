import React from 'react'
import photo1 from '../../assets/images2/photo1.png'
import photo2 from '../../assets/images2/photo2.png'
import photo3 from '../../assets/images2/photo3.png'
import photo4 from '../../assets/images2/photo4.png'
import photo5 from '../../assets/images2/photo5.png'

export default function Life() {
    return (
        <div className='life'>
            <div className="container">
                <div className="life-heading">Life @ Way  Admission</div>
                <div className="title">'Work hard, party harder' comes true at Leverage Edu.</div>

                <div className="life-img">

                    <img src={photo1} alt="" />


                    <img src={photo2} alt="" />


                    <img src={photo3} alt="" />


                    <img src={photo4} alt="" />


                    <img src={photo5} alt="" />

                </div>
            </div>
        </div>
    )
}
