import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github,mail,linkedin} from '../assets';
const Hero = () => {
  return (
   <section className='relative w-full h-screen 
   mx-auto'>
<div className={`${styles.paddingX} absolute 
inset-0 top-[80px] max-w-7xl mx-auto flex
flex-row items-start gap-5`}>
  <div className='flex flex-col
  justify-center items-center mt-5'>
<div className='w-5 h-5 rounded-full bg-[#915eff]'/>
  <div className='w-1 sm:h-80 h-40 violet-gradient'/>
</div>
<div>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi , I'm <span className='text-[#915eff]'>
      Pavani</span></h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        Building scalable and intuitive digital solutions <br className='sm:block hidden'/> that solve real-world problems.
      </p>
      <br></br><br></br>
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
  <a href="#contact" className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition">
    Contact Me
  </a>
  <a href="#works" className="bg-gray-200 text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-300 transition">
    View My Work
  </a>
  <a href="/Poloju_Pavani(1).pdf" // make sure your CV file is in public folder
download
      className="bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-700 transition"
  >
    Download CV
  </a>
</div>
<br></br>
{/* Chat + Social Icons */}
<div className="mt-8 flex flex-col items-center"> {/* added mt-8 for downward spacing */}
  <p className="mb-4 text-white font-bold text-xl">To Know More About Me.....</p>
  <br></br> {/* added mb-4 for spacing between text and icons */}
  <div className="flex justify-center gap-10 animate-in fade-in slide-in-from-bottom-6 duration-1000"> {/* increased gap from 6 to 10 */}
    <a href="https://github.com/pavanipoloju22" target="_blank" rel="noreferrer">
      <img src={github} alt="GitHub" className="w-9 -mt-1 h-8 sm:w-9 sm:h-10" />
    </a>
    <a href="https://www.linkedin.com/in/pavanipoloju23/" target="_blank" rel="noreferrer">
      <img src={linkedin} alt="LinkedIn" className="w-8 h-8 sm:w-8 sm:h-8" />
    </a>
    <a href="mailto:pavanipoloju23@gmail.com">
      <img src={mail} alt="Email" className="w-8 h-8 sm:w-8 sm:h-8" />
    </a>
  </div>
</div>
     </div>

</div>

<div className="absolute xs:bottom-10 bottom-32 
w-full flex justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4
    border-secondary flex justify-center items-start p-2 z-50 ">
<motion.div
   animate={{ y: window.innerWidth < 640 ? [0,12,0] : [0,24,0] }}
  transition={{
    duration:1.5,
    repeat:Infinity,
    repeatType:'loop'
  }}
  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
/>
    </div>
  </a>
</div>
   </section>
  )
}

export default Hero
