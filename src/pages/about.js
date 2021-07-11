import React from "react"
import { Link } from "gatsby"

const AboutPage = () =>{
    return(
        <div>
            <h1>About</h1>
            <p>This is an example about page</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>

        </div>
    )
}

export default AboutPage