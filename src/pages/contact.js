import React from "react"
import { Link } from "gatsby"

const ContactPage = () =>{
    return(
        <div>
            <h1>Contact</h1>
            <p>Drop me a line</p>
            <p>Please visit my <Link to="https://twitter.com/CalvinWhitehurs">Twitter Profile</Link></p>
        </div>
    )
}

export default ContactPage