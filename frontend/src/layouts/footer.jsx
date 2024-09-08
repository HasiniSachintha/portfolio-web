import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";




function Footer() {
  return (
    <footer class="text-white mt-10 pb-5" >
      <div className='mt-5'>
        <div className='text-center' >
          <h3>Lets connect</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello </p>
          <a href="mailto:hasinisachintha@outlook.com">hasinisachintha@outlook.com</a>
        </div>
        <div className='flex flex-row gap-4 justify-items-center justify-center mt-5 mb-5'>
        <FaLinkedin />
        <FaGithub />
        <GrMail />
        </div>
      </div>
    </footer>
  )
}

export default Footer