import React from 'react'

export default function Community() {

    const commmunityData = [
        {
            aboutCommunity: 'About the community',
            render: ' Blender Renders',
            commmunityPara: '  A place where beginner Blender  artists can post their creations and get feedback on.',
            numTop: '13.5K',
            numBottom: 'Members',
            numTop2: '47',
            numBottom2: 'Online',
            creation: 'Created Dec 30, 2023 ',

            style: {
                boxShadow: '-60px -60px 0px 0px rgb(192 177 173)', backgroundColor: ' #ede9e2'
            }
        },
        {
            aboutCommunity: 'About the community',
            render: ' Blender Renders',
            commmunityPara: '  A place where beginner Blender  artists can post their creations and get feedback on.',
            numTop: '13.5K',
            numBottom: 'Members',
            numTop2: '47',
            numBottom2: 'Online',
            creation: 'Created Dec 30, 2023 ',

            style: {
                boxShadow: '-60px -60px 0px 0px rgb(192 177 173)', backgroundColor: ' rgb(216 163 255)'
            }
        },
    ]

    return (
        <div className='about-community'>
            <div className="container">

                {commmunityData.map((data, index) => (
                    <div className="community-card" key={index}>
                        <div className="card5" style={data.style}>
                            <div className="aboutCommunity">
                                {data.aboutCommunity}
                            </div>
                            <div className="render">
                                {data.render}
                            </div>
                            <div className="community-para">
                                {data.commmunityPara}
                            </div>
                            <div className="numbering">
                                <div className="left">
                                    <div className="num-top">
                                        {data.numTop}
                                    </div>
                                    <div className="num-bottom">{data.numBottom}</div>
                                </div>
                                <div className="left">
                                    <div className="num-top num-top2">
                                        {data.numTop2}
                                    </div>
                                    <div className="num-bottom num-bottom3">{data.numBottom2}</div>
                                </div>
                            </div>
                            <div className="btn">
                                <div className="btn1">
                                    <a href="#">
                                        <button>Joined</button>
                                    </a>
                                </div>
                                <div className="btn2">
                                    <a href="#">
                                        <button>Create Post</button>
                                    </a>
                                </div>
                            </div>
                            <div className="creation-date">
                                {data.creation}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
