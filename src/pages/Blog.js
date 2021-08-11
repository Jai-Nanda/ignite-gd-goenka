import React from 'react'
import './css/Blog.css'
import { Link } from 'react-router-dom'
import PostImg1 from '../static/post1_art.jpg'
import PostImg2 from '../static/posr2_god.jpg'
import PostImg3 from '../static/post3_indeoendence.jpg'
import PostImg4 from '../static/post4_history.jpeg'
import PostImg5 from '../static/post5_amritsar.jpg'
import PostImg6 from '../static/post6_food.jpg'
import Footer from '../components/Footer' 
const Blog = () => {
    return (
        <>
        <div className="pog">
            <div className="blog">
                <div className="post">
                    <div className="img">
                        <img src={PostImg1} alt="post" className="postImg"/>
                    </div>
                        <p className="para">The Warli Art Tradition</p>
                        <Link to="/post1">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
                <div className="post">
                    <div className="img">
                        <img src={PostImg2} alt="post" className="postImg"/>
                    </div>
                        <p className="para">The Olympian Gods</p>
                        <Link to="/post2">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
                <div className="post">
                    <div className="img">
                        <img src={PostImg3} alt="post" className="postImg"/>
                    </div>
                        <p className="para">Independence Day</p>
                        <Link to="/post1">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
            </div>
            <div className="blog">
                <div className="post">
                    <div className="img">
                        <img src={PostImg4} alt="post" className="postImg"/>
                    </div>
                        <p className="para">History of India</p>
                        <Link to="/post1">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
                <div className="post">
                    <div className="img">
                        <img src={PostImg5}alt="post" className="postImg"/>
                    </div>
                        <p className="para">Travel Blog</p>
                        <Link to="/post2">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
                <div className="post">
                    <div className="img">
                        <img src={PostImg6} alt="post" className="postImg"/>
                    </div>
                        <p className="para">Food Blog.</p>
                        <Link to="/post3">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                </div>
                </div>
                <Footer/>
                </div>
        </>
    )
}

export default Blog
