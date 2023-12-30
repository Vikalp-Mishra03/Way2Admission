import React from 'react'
import bannerBlog from '../../assets/images2/aboutusbgweb.png'

export default function BlogBanner() {


    const bannerData = [
        {
            blogimg: bannerBlog,
            bold: ' Lorem ipsum dolor sit amet.',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sunt quibusdam, neque cumque adipisci nulla veritatis vero accusamus recusandae repudiandae deserunt impedit perferendis molestias? Eligendi nulla reprehenderit minima quia cumque culpa, ea illum laboriosam!',
        },

    ]

    return (
        <div className='blogBanner'>
            {bannerData.map((data, index) => (
                <div key={index} className="blogEntry">
                    <div className="blog-img">
                        <img src={data.blogimg} alt="" />
                        <div className="bannerTitle">
                            <div className="bold">
                                {data.bold}
                            </div>
                            <div className="para">
                                {data.para}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <hr />
        </div>
    )
}
