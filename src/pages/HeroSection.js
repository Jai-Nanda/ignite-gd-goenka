import React from 'react'
import './css/HeroSection.css'
import { Link } from 'react-router-dom'
import heroImage from '../static/india.jpg'
const HeroSection = () => {
    return (
        <>
            <div className="heroflex">
                <div className="textflex">
                    <h1 className="heroheading">Incredible India</h1>
                    <p className="description">
It has beautiful green crops that fill our land with greenery. It also has many rivers flowing through fertile soil, a variety of flowers, plants and animals.</p>
                    <div className="buttons">
                        <Link to="/cities"><button className="btn-more">Know More</button></Link>
                    <Link to="/blog"><button className="btn-blog">Read Blog  &nbsp;<span><i class="fas fa-arrow-right"></i></span></button></Link>
                    </div>
                </div>
                <div className="image">
                    <img src={heroImage} alt="main" className="heroImage"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection
