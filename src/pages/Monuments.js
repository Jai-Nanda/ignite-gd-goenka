import React from 'react'
import './css/Cities.css'
import Taj from '../static/taj.jpg'
import Charminar from '../static/charminar.jpg'
import Minar from '../static/minar.jpg'
import Agra from '../static/agra.jpg'
import Jantar from '../static/jantar.jpg'
import Footer from '../components/Footer'
import '../components/Footer.css'
const Cities = () => {
    return (
        <>
            <div className="city">
            <div className="cityflex">
                <div className="infoflex">
                    <h2>Taj Mahal</h2>
                        <p>The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p>
                        <p>Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2020 would be approximately 70 billion rupees (about U.S. $956 million). The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri.</p>
                        <p>The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage". </p>
                </div>
                 <div className="imaging">
                    <img src={Taj} alt="monument" />
                </div>
                </div>
                <div className="cityflex">
                 <div className="imaging">
                    <img src={Charminar} alt="monument" />
                    </div>
                    <div className="infoflex">
                    <h2>Charminar</h2>
                        <p>The Charminar constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad and is listed among the most recognised structures in India. It has also been officially incorporated as the Emblem of Telangana for the state of Telangana.[3] The Charminar's long history includes the existence of a mosque on its top floor for more than 400 years. While both historically and religiously significant, it is also known for its popular and busy local markets surrounding the structure, and has become one of the most frequented tourist attractions in Hyderabad. Charminar is also a site of numerous festival celebrations, such as Eid-ul-adha and Eid al-Fitr.</p>
                        <p>The Charminar is situated on the east bank of Musi river. To the west lies the Laad Bazaar, and to the southwest lies the richly ornamented granite Makkah Masjid. It is listed as an archaeological and architectural treasure on the official "List of Monuments" prepared by the Archaeological Survey of India. The English name is a translation and combination of the Urdu words chār and minar or meenar, translating to "Four Pillars"; the eponymous towers are ornate minarets attached and supported by four grand arches.</p>
                </div>
                </div>
                <div className="cityflex">
                <div className="infoflex">
                    <h2>Qutb Minar</h2>
                        <p>The Qutb Minar, also spelled as Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex. It is a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India. It is one of most visited tourist spots in the city due to it being one of the earliest that survives in the Indian subcontinent.</p>
                        <p>It can be compared to the 62-metre all-brick Minaret of Jam in Afghanistan, of c. 1190, which was constructed a decade or so before the probable start of the Delhi tower.[7] The surfaces of both are elaborately decorated with inscriptions and geometric patterns. The Qutb Minar has a shaft that is fluted with "superb stalactite bracketing under the balconies" at the top of each stage. In general, minarets were slow to be used in India and are often detached from the main mosque where they exist.</p>
                </div>
                 <div className="imaging">
                    <img src={Minar} alt="monument" />
                </div>
                </div>
                <div className="cityflex">
                                     <div className="imaging">
                    <img src={Agra} alt="monument" />
                </div>
                <div className="infoflex">
                    <h2>Agra Fort</h2>
                        <p>Agra Fort is a historical fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty until 1638, when the capital was shifted from Agra to Delhi. Before capture by the British, the last Indian rulers to have occupied it were the Marathas. In 1983, the Agra fort was inscribed as a UNESCO World Heritage site.[1] It is about 2.5 km northwest of its more famous sister monument, the Taj Mahal. The fort can be more accurately described as a walled city.</p>
                        <p>Like the rest of Agra, the history of Agra Fort prior to Mahmud Ghaznavi's invasion is unclear. However in the 15th century, the Chauhan Rajputs occupied it. Soon after, Agra assumed the status of capital when Sikandar Lodi (A.D. 1487–1517) shifted his capital from Delhi and constructed a few buildings in the pre-existing Fort at Agra. After the first battle of Panipat (A.D. 1526) Mughals captured the fort and ruled from it. In A.D. 1530, Humayun was crowned in it. The Fort got its present appearance during the reign of Akbar (A.D. 1556–160</p>
                </div>

                </div>
                <div className="cityflex">
                <div className="infoflex">
                    <h2>Jantar Mantar</h2>
                    <p>A Jantar Mantar is an assembly of stone-built atronomical instruments, designed to be used with the naked eye. There were five Jantar Mantars in India, all of them built at the command of the Rajah Jai Singh II, who had a keen interest in mathematics, architecture and astronomy; four remain, as the Jantar Mantar at Mathura was torn down just before the revolt of 1857. The largest example is the equinoctial sundial belonging to Jaipur's assembly of instruments, consisting of a gigantic triangular gnomon with the hypotenuse parallel to the Earth's axis. On either side of the gnomon is a quadrant of a circle, parallel to the plane of the equator. The instrument can be used with an accuracy of about 2 seconds by a "skilled observer" to measure the time of day, and the declination of the Sun and the other heavenly bodies. It is the world's largest stone sundial, known as the Vrihat Samrat Yantra.[1][2] The Jaipur Jantar Mantar is a UNESCO World Heritage Site.</p>
                </div>
                 <div className="imaging">
                    <img src={Jantar} alt="monument" />
                </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Cities
