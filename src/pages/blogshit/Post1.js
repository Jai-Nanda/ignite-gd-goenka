import React from 'react'
import '../css/Post.css'
import { Link } from 'react-router-dom'
import PostImg1 from '../../static/post3_indeoendence.jpg'
import Footer from '../../components/Footer'
const Post1 = () => {
    return (
        <>
            <div className="main">
                <h2>Independence Day</h2>
                <img src={PostImg1} alt="f" />
                <p>Independence Day marks the end of British rule in 1947 and the establishment of a free and independent Indian nation. It also marks the anniversary of the partition of the subcontinent into two countries, India and Pakistan, which occurred at midnight on August 14–15, 194</p>
                <p>An independence day is an annual event commemorating the anniversary of a nation's independence or statehood, usually after ceasing to be a group or part of another nation or state, or more rarely after the end of a military occupation. Many countries commemorate their independence from a colonial empire. American political commentator Walter Russell Mead notes that, "World-wide, British Leaving Day is never out of season."</p>
                <p>
On July 8, 1776, the first public readings of the Declaration were held in Philadelphia's Independence Square to the ringing of bells and band music. One year later, on July 4, 1777, Philadelphia marked Independence Day by adjourning Congress and celebrating with bonfires, bells and fireworks.</p>
                <p>Independence Day marks the end of British rule in 1947 and the establishment of a free and independent Indian nation. It also marks the anniversary of the partition of the subcontinent into two countries, India and Pakistan, which occurred at midnight on August 14–15, 194</p>
            <Link to="/blog"><span><i class="fas fa-arrow-left"></i></span> Go Back </Link>
            <Footer/>
            </div>
        </>
    )
}

export default Post1
