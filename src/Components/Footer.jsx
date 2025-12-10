import React from 'react'
import { FaWhatsapp,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="container-fluid py-2 text-center align-content-cente" style={{backgroundColor: "#f3a737"}}>
        <div className="row">
            <div className="col">
                <h6 className='text-capitalize'>developed by <b><a href="https://github.com/mihir183" target='_blank' className='text-dark text-decoration-none'>@mihir183</a></b></h6>
            </div>
            <div className="col">
                <ul className='d-flex list-unstyled gap-3 justify-content-center gap-4'>
                    <li><a href="https://wa.me/9664674593" className='text-dark fs-6'><FaWhatsapp/></a></li>
                    <li><a href="" className='text-dark fs-6'><FaLinkedin /></a></li>
                    <li><a href="" className='text-dark fs-6'><MdEmail/></a></li>
                    <li><a href="" className='text-dark fs-6'><IoMdContact/></a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
