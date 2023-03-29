import React from 'react'
import Link from 'next/link'
import Navbar from '@/component/Navbar'
import Head from 'next/head'


const about = () => {

    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar />
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis fugit, expedita nisi unde exercitationem saepe culpa, nam nemo minus amet possimus voluptate magnam porro consequuntur dignissimos quibusdam nostrum voluptates.
            </div>
        </>
    )
}

export default about
