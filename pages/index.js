import React from 'react'
import Link from 'next/link'
import About from './about'
import Navbar from '@/component/Navbar'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <Navbar />
      <style jsx>
        {`
        .myblock{
          color: orange
        }
        `}
      </style>
      <p className={`myblock`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sunt odio pariatur dolore nesciunt voluptate nam necessitatibus labore neque cumque perferendis nobis officia beatae voluptatibus, cum consequuntur? Dolore, natus voluptatibus.
      </p>
      <hr />
      <Image
        src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        width="500"
        height="300"
        alt='myImage'
      />
    </>
  )
}

export default index
