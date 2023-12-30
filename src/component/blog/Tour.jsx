import React from 'react'
import beach from '../../assets/images/polynesia-3021072_640.jpg'
import train from '../../assets/images/train.jpg'
import corbett from '../../assets/images/nature.jpg'
import desert from '../../assets/images/desert.jpg'

export default function Tour() {
    const tourData = [
        {
            img: train,
            tourPlace: 'Winter Tour To switzerland',
            explore: 'Explore',
            aboutPlace: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, tenetur explicabo velit nostrum nobis facere?  nostrum nobis facere?',
            style: {
                color: '#164f81'
            }
        },
        {
            img: corbett,
            tourPlace: 'Tour to Jim Corbett Park',
            explore: 'Explore',
            aboutPlace: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, tenetur explicabo velit nostrum nobis facere?  nostrum nobis facere?',
            style: {
                color: '#F5841F'
            }
        },
        {
            img: desert,
            tourPlace: 'Summer Tour to Thar',
            explore: 'Explore',
            aboutPlace: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, tenetur explicabo velit nostrum nobis facere?  nostrum nobis facere?',
            style: {
                color: 'rgb(147 0 255)'
            }
        },
        {
            img: desert,
            tourPlace: 'Summer Tour to Thar',
            explore: 'Explore',
            aboutPlace: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, tenetur explicabo velit nostrum nobis facere?  nostrum nobis facere?',
            style: {
                color: 'rgb(147 0 255)'
            }
        },
        {
            img: corbett,
            tourPlace: 'Tour to Jim Corbett Park',
            explore: 'Explore',
            aboutPlace: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, tenetur explicabo velit nostrum nobis facere?  nostrum nobis facere?',
            style: {
                color: '#F5841F'
            }
        },
    
    ]
    return (
        <div className='tour'>
            <div className="beach-img">
                <img src={beach} alt="" />
            </div>
            <div className="tour-text"><span>T</span>our</div>
            <div className="container">
                <div className="tourCards">
                    {tourData.map((tour, index) => (
                        <div className="tour-Card" key={index}>
                            <div className="tour-img">
                                <img src={tour.img} alt="" />
                            </div>
                            <div className="tour-data">
                                <div className="explore">{tour.explore}</div>
                                <div className="tour-place" style={tour.style}>{tour.tourPlace}</div>
                                <div className="about-place">{tour.aboutPlace}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
