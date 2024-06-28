import React, { Fragment } from "react";
import "../css/home.css"

const Home = () => {


    return (
        <Fragment>
            <div>
                <div>
                    <h1>Ali Aaron Yu</h1>
                    <h4 className="subheading">Software Engineer</h4>
                    <p>Welcome to my website. You will find all my projects here.</p>
                </div>
                <div>
                    <img src = "../img/Profilepic.jpeg" alt="picture of Ali Aaron Yu"/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;