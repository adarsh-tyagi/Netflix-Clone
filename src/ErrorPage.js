import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <div className="errorPage">
            <h1>Page Not Found!</h1>
            <p>Go to</p>
            <Link to="/"><button className="errorPage__btn">NETFLIX</button></Link>
        </div>
    )
}

export default ErrorPage
