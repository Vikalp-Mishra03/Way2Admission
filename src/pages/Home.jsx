import React from 'react'
import About from '../component/home pge/about/About'
import Accordion from '../component/home pge/accordion/Accordion'
import Cards from '../component/home pge/cards/Cards'
import Imagecarousel from '../component/home pge/Carousel/Imagecarousel'
import EventAndNews from '../component/home pge/eventandNews/EventAndNews'
import Partners from '../component/home pge/partners/Partners'
import Publication from '../component/home pge/publication/Publication'
import Stories from '../component/home pge/stories/Stories'
import TopFeature from '../component/home pge/topFeature/TopFeature'
import Video from '../component/home pge/video/Video'
import WhyChoose from '../component/home pge/whyChoose/WhyChoose'
import WhyChooseWay2 from '../component/home pge/whyChooseway2/WhyChooseWay2'




export default function Home() {
    return (
        <div>
            <Publication />
            <Imagecarousel />
            <Cards />
            <About />
            {/* <WhyChoose /> */}
            {/* <TopFeature /> */}
            {/* <Stories /> */}
            {/* <WhyChooseWay2 /> */}
            {/* <Video /> */}
            {/* <EventAndNews /> */}
            {/* <Partners /> */}
            {/* <Accordion /> */}
        </div>
    )
}
