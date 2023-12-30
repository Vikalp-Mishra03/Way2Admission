import React from 'react'
import BlogBanner from '../component/blog/blogBanner'
import Trending from '../component/blog/Trending'
import LatestBookList from '../component/blog/LatestBookList'
import MissAnything from '../component/blog/MissAnything'
import Future from '../component/blog/Future'
import Community from '../component/blog/Community'
import Tour from '../component/blog/Tour'

export default function Blog() {
    return (
        <div>
            <BlogBanner />
            <Trending />
            <LatestBookList />
            <MissAnything />
            <Future />
            <Community />
            <Tour />
        </div>
    )
}
