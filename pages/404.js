import { useRouter } from "next/router"
import { useEffect } from "react"

const ErrorPage = () => {
    const Router = useRouter()
    const handleError = () => {
        Router.push("/")
    }


    // useEffect(() => {
    //     setTimeout(() => {
    //         Router.push('/')
    //     }, 1000);
    // }, [])

    useEffect(() => {
        const redirect = () => {
            Router.push('/')
        }
        setTimeout(redirect, 1000);

        return () => clearTimeout(redirect);
    }, [Router])

    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    {/* <Link href="/" className="btn btn-primary">Go Home</Link> */}
                    <button onClick={handleError} type="button" className="btn btn-danger">Go Home</button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
