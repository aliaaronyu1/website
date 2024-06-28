import React, { Fragment } from "react";
import "../css/home.css";
import ProfilePic from "../img/Profilepic.jpeg"

const Home = () => {


    return (
        <Fragment>
            <div className="d-flex flex-row justify-content-center">
                <div>
                    <h1>Ali Aaron Yu</h1>
                    <h4 className="subheading">Software Engineer</h4>
                    <p>Welcome to my website. You will find all my projects here.</p>
                </div>
                <div className="ml-5">
                    <img className="profilepic" src={ProfilePic} alt='Ali Aaron Yu'/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;