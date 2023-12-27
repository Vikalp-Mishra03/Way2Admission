import React from 'react'
import AboutBanner from '../component/aboutUs/aboutbanner/AboutBanner';
import OurStories from '../component/aboutUs/ourStories/OurStories';
import Progress from '../component/aboutUs/progress/Progress';
import OurOffering from '../component/aboutUs/ourOffering/OurOffering';
import KnowMore from '../component/aboutUs/knowMore/KnowMore';
import OurStudents from '../component/aboutUs/ourStudents/OurStudents';
import Companies from '../component/aboutUs/companies/Companies';


export default function About() {
  return (
    <div>
      <AboutBanner />
      <OurStories />
      <Progress />
      <OurOffering />
      <Companies />
      <KnowMore />
      <OurStudents />
    </div>
  )
}
