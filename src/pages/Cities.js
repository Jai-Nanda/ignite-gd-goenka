import React from 'react'
import './css/Cities.css'
import Delhi from '../static/delhi.jpg'
import Mumbai from '../static/mumbai.webp'
import Chennai from '../static/chennai.jpg'
import Kolkata from '../static/kolkata.jpg'
import Footer from '../components/Footer'
const Cities = () => {
    return (
        <>
            <div className="city">
            <div className="cityflex">
                <div className="infoflex">
                    <h2>Delhi</h2>
                   <p>Delhi, city and national capital territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south, since 1947 the capital of India, built in the first part of the 20th century as the capital of British India.</p>
                   <p>One of the country’s largest urban agglomerations, Delhi sits astride (but primarily on the west bank of) the Yamuna River, a tributary of the Ganges (Ganga) River, about 100 miles (160 km) south of the Himalayas. The national capital territory embraces Old and New Delhi and the surrounding metropolitan region, as well as adjacent rural areas. To the east the territory is bounded by the state of Uttar Pradesh, and to the north, west, and south it is bounded by the state of Haryana.</p>
                   <p>Delhi is of great historical significance as an important commercial, transport, and cultural hub, as well as the political centre of India. According to legend, the city was named for Raja Dhilu, a king who reigned in the region in the 1st century BCE. The names by which the city has been known—including Delhi, Dehli, Dilli, and Dhilli, among others—likely are corruptions of his name.</p>
                </div>
                 <div className="imaging">
                    <img src={Delhi} alt="monument"/>
                </div>
                </div>
                <div className="cityflex">
                 <div className="imaging">
                    <img src={Mumbai} alt="monument" />
                    </div>
                    <div className="infoflex">
                    <h2>Mumbai</h2>
                        <p>Mumbai also known as Bombay is the capital city of the Indian state of Maharashtra. According to the United Nations, as of 2018, Mumbai is the second-most populous city in the country after Delhi and the seventh-most populous city in the world with a population of roughly 20 million.</p>
                        <p>As per Indian government population census of 2011, Mumbai was the most populous city in India with an estimated city proper population of 12.5 million living under Municipal Corporation of Greater Mumbai. Mumbai is the centre of the Mumbai Metropolitan Region, the sixth most populous metropolitan area in the world with a population of over 23 million.</p>
                        <p> Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city. It has the highest number of millionaires and billionaires among all cities in India. Mumbai is home to three UNESCO World Heritage Sites: the Elephanta Caves, Chhatrapati Shivaji Maharaj Terminus, and the city's distinctive ensemble of Victorian and Art Deco buildings.</p>
                </div>
                </div>
                <div className="cityflex">
                <div className="infoflex">
                    <h2>Chennai</h2>
                        <p>Chennai also known as Madras, the official name until 1996) is the capital of the Indian state of Tamil Nadu. Located on the Coromandel Coast of the Bay of Bengal, it is one of the largest cultural, economic and educational centres of south India. According to the 2011 Indian census, it is the sixth-most populous city and fourth-most populous urban agglomeration in India.</p>
                        <p>The city together with the adjoining regions constitutes the Chennai Metropolitan Area, which is the 36th-largest urban area by population in the world. The traditional and de facto gateway of South India, Chennai is among the most-visited Indian cities by foreign tourists. It was ranked the 43rd-most visited city in the world for the year 2015 and was ranked the 36th-most visited city in the world for the year 2019.</p>
                        <p>The Quality of Living Survey rated Chennai as the safest city in India. Chennai attracts 45 percent of health tourists visiting India, and 30 to 40 percent of domestic health tourists. As such, it is termed "India's health capital". Chennai has the fifth-largest urban economy of India.</p>
                </div>
                 <div className="imaging">
                    <img src={Chennai} alt="monument" />
                </div>
                </div>
                <div className="cityflex">
                                     <div className="imaging">
                    <img src={Kolkata} alt="monument" />
                </div>
                <div className="infoflex">
                    <h2>Kolkata</h2>
                        <p>Kolkata previously Calcutta the official name until 2001 is the capital of the Indian state of West Bengal. Located on the eastern bank of the Hooghly River, the city is approximately 80 kilometres (50 mi) west of the border with Bangladesh.</p>
                        <p>It is the primary business, commercial, and financial hub of Eastern India and the main port of communication for North-East India.[19] According to the 2011 Indian census, Kolkata is the seventh-most populous city in India, with a population of 4.5 million residents within the city limits, and a population of over 14.1 million residents in the Kolkata Metropolitan Area. It is the third-most populous metropolitan area in India. The Port of Kolkata is India's oldest operating port and its sole major riverine port. Kolkata is regarded as the cultural capital of India.</p>
                        <p>In the late 17th century, the three villages that predated Calcutta were ruled by the Nawab of Bengal under Mughal suzerainty. After the Nawab granted the East India Company a trading licence in 1690, the area was developed by the Company into an increasingly fortified trading post known as Fort William.</p>
                </div>

                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Cities
