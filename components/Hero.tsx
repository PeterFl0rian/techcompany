import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='h-screen'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:top-40 h-screen' fill='white' />
        <Spotlight className='top-40 left-full h-[80vw] w-[50vw]' fill='white' />
        <Spotlight className='top-28 left-[38%] h-[80vw] w-[50vw]' fill='#FF3031' />
      </div>
      
      <div className="absolute h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='h-screen flex justify-center relative z-10 flex-col gap-10'>
        <div className='max-w-[89vw] flex justify-center flex-col items-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> Start your new life within month </h2>
          <TextGenerateEffect className='text-[40px] md:text-5xl lg:text-6xl text-center' words='Transform your life within a few seconds with new leg or arm' duration={1.5}/>
          <p className='text-center'>Let Neurotech help you start your new life.</p>
        </div>

        <a className='text-center' href="#about">
          <MagicButton title='start new life' icon={<FaLocationArrow />} position='right' />
        </a>
      </div>

      
    </div>
  )
}

export default Hero