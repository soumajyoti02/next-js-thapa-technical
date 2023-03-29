import Navbar from "@/component/Navbar";
import { useRouter } from "next/router";
import Head from 'next/head'

// Defining a function that generates the dynamic paths for each blog post

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    // Mapping over the data from the API and returning an array of objects containing the params for each path

    const paths = data.map((curElem) => {
        return {
            params: {
                pageNo: curElem.id.toString(),
            }
        }
    })

    // Returning the paths array and fallback to false so that 404 pages are returned for non-existent pages
    return {
        paths,
        fallback: false,
    }
}

// Defining a function that gets the data for each blog post by ID

export const getStaticProps = async (context) => {
    const id = context.params.pageNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    // Returning the data as props so that it can be used in the component

    return {
        props: {
            data,
        }
    }
}

const myData = ({ data }) => {
    return (
        <>
            <Head><title>Blog Items</title></Head>
            <Navbar />
            <div key={data.id}>
                <h3>
                    {data.body}
                </h3>
            </div>

        </>
    )
}

export default myData;
