import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
     <Navbar/>
    <section>
        <div className="container">
            <div className="row gap-2">
                <div className="col-4">
                    <div className="box border border-1 m-5">
                        <h3><FaMapLocationDot/></h3>
                        <p>location</p>
                        <p>Shree Balaji Group,
                            4th Floor, Shree Balaji Mall,
                            Visat to Gandhinagar Highway,
                            Ahmedabad. 382424. Gujarat, INDIA</p>
                    </div>
                </div>
                <div className="col">
                    <h2>find us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.519852551981!2d72.57251287477072!3d23.041395415626514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ae790f142d%3A0x35c4f6c363885d2e!2sRiverfront%20Ahmedabad!5e0!3m2!1sen!2sin!4v1761573138573!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
     <Footer/>
    </>
  )
}

export default Contact
