import React from "react"

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";

const Head = () => {

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 6378523943</label>
            <i className='fa fa-envelope'></i>
            <label> godmarble.statuearts@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label><FaFacebook /></label>
            <label><IoLogoWhatsapp /></label>
            <label><MdAddIcCall /></label>
            <label>EN</label>
            {/* <span>🏳️‍⚧️</span>
            <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
