import React from 'react'
import more from '../../assets/images2/more1.jpeg'

export default function LatestBookList() {
    const latestData = [
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
        {
            img:more,
            writer: 'XYZ',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sit amet consectetur, adipisicing elit. Rerum, eaque.'
        },
    ]

    return (
        <div className='lastestBookList'>
            <div className="container">
                <div className="latest">Latest Book</div>
                <div className="latest-cards">
                {latestData.map((book, index) => (
                        <div key={index} className="latestcard">
                            <img src={book.img} alt={`Book ${index + 1}`} />
                            <div className="writer">{book.writer}</div>
                            <div className="para">{book.para}</div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
