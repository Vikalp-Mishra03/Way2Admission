import React, { useEffect, useRef, useState } from 'react'
import trending1 from '../../assets/images2/woman playing laptop on_5315939 1 (1) (1).png'
import college from '../../assets/images2/Rectangle 42.png'




export default function Trending() {


    const trendingData = [
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
        {
            img: college,
            writer: ' By Rohan',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus nisi quis amet iure, '
        },
    ]


    return (
        <div className='trending'>
            <div className="container">

                <div className="trendingHeading"> Trending Book List</div>

                <div className="gallery-wrap">
                    <div className="gallery" >
                        {trendingData.map((data, index) => (
                             
                            <span key={index}>
                                <img src={data.img} alt="" />
                                <div className="border">
                                    <div className="writer">{data.writer}</div>
                                    <div className="para">{data.para}</div>
                                </div>
                            </span>
                        ))}
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
