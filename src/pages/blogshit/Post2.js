import React from 'react'
import '../css/Post.css'
import PostImage2 from '../../static/posr2_god.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
const Post1 = () => {
    return (
        <>
            <div className="main">
                <h2>The Olympian Gods</h2>
                <img src={PostImage2} alt="loading" />
                <p>This is the story of gods and heroes, of friends becoming enemies and sisters becoming lovers, a tale of love and lust, war and peace, of complicated relations and difficult names. This is Greek mythology. It is incredible how our life is shaded by this great saga and we don’t even know it! Start your morning with a bowl of ‘cereal’ which comes from CERES- the goddess of agriculture or do you prefer ‘marmalade’ on your bread? Do you have a ‘narcissistic’ friend? Are you ‘tantalized’ to tell them off? It is difficult to get by a single day without coming across references with their origin rooted in Greek mythology.</p>
                <p>Zeus was the last child of Rhea and Cronus. After escaping his father’s stomach in infancy (Cronos swallowed all his children in fear of a prediction stating that he will be overthrown by them), a teenage Zeus, much to his father’s dismay overthrew him and the titans with the help of his recently disgorged siblings. Along with his brothers, Hades and Poseidon, Zeus shared the rule of the world and became the king of Olympus. Sitting atop his golden throne, he was revered by all. He was regarded as a wise, fair and merciful figure that displayed a carefree personality and rather enjoyed the finer things in life.</p>
                <p>On multiple occasions, Zeus exhibited a weakness for women. He chased them in an attempt to seduce them; a chase that often led to him fathering gods/ goddesses and heroes. He was also known to be easily angered and impulsive which resulted in violent storms and destructive punishments. </p>
            <Link to="/blog"><span><i class="fas fa-arrow-left"></i></span> Go Back </Link>
            <Footer/>
            </div>
        </>
    )
}

export default Post1
