import React, { useState } from 'react'
import Navbar from '@/component/Navbar'
import Link from 'next/link'
import { Router } from 'next/router'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            data: data,
        },
    }
}

const MyBlog = ({ data }) => {
    const handleClick = () => {

    }
    return (
        <>
            <Head><title>My Blog</title></Head>
            <Navbar />
            {data.slice(0, 5).map((curElem) => {
                return (
                    <div className="card w-[70%] box-border m-auto p-2 rounded-3xl space-y-2 mb-4" key={curElem.id}>
                        <div className="card-header">
                            <h5 className="card-header text-3xl">Featured</h5>
                        </div>
                        <div className="card-body">
                            <Link href={`/blogpost/${curElem.id}`}><h5 className="card-title">{curElem.title}</h5></Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MyBlog
