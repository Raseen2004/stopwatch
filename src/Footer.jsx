import React from 'react'
import linkedin from "./svg/linkedin.svg";
import mail from "./svg/mail.svg";
import github from "./svg/github.svg";


const Footer = () => {
  return (
    <div>
        <p className='text-sm font-medium mt-2'>Design and Developed by <span className='underline'>Raseen!</span></p>
        <div className='flex justify-center w-auto items-center'>
            <a href="https://www.linkedin.com/in/raseen2004/" className='mx-2 mt-2' target='_blank'>
                <img src={linkedin} width={24} alt="linkedin" />
            </a>
            <a href="mailto:raseen429@gmail.com" className='mx-2 mt-2' target='_blank'>
                <img src={mail} alt='mail' width={24}/>
            </a>
            <a href="https://github.com/raseen2004" className='mx-2 mt-2' target='_blank'>
                <img src={github} alt='github' width={26} />
            </a>
        </div>
    </div>
  )
}

export default Footer