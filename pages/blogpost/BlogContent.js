import React from 'react'
import Head from 'next/head';
import Navbar from '@/component/Navbar';

const BlogContent = ({ body }) => {
    return (
        <>
            <Head><title>Blog Content</title></Head>
            <Navbar />
            <div className="container">
                {body}
            </div>

        </>
    )
}

export default BlogContent
