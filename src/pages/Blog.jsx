import React from 'react'
import BlogBanner from '../component/blog/blogBanner'
import Trending from '../component/blog/Trending'
import LatestBookList from '../component/blog/LatestBookList'
import MissAnything from '../component/blog/MissAnything'

export default function Blog() {
    return (
        <div>
            <BlogBanner />
            <Trending />
            <LatestBookList />
            <MissAnything />
        </div>
    )
}
