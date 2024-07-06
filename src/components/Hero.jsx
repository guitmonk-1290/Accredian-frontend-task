import React from 'react'
import styles from "../style"
import ImageContainer from './ImageContainer'
import Button from './Button'

const Hero = ({ triggerModal }) => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
          <div className='flex flex-col ml-auto mr-auto'>
            <h1 className='mb-auto ml-auto mr-auto font-poppins font-bold sm:text-[42px] text-[32px] text-black ss:leading-[100px] md:leading-[75px] text-center'>
              Refer and <br className='sm: hidden' />
              <span className='text-yellow-400'>Earn</span> <br />
            </h1>
            <span className={`${styles.paragraph} w-full font-semibold max-w-[470px] mt-2 align-middle text-center`}>
              Refer a friend and get a chance to win upto
              <br className='sm: hidden' />
              <span className='text-[24px] text-blue-600'> 15,000</span><br />
              and other amazing rewards!
            </span>
            <div className='ml-auto mr-auto mt-8'>
              <Button label="Start Referring" triggerModal={triggerModal} />
            </div>
          </div>
          <div className='ss:hidden md:flex ml-auto md:mr-4 mr-0 pr-16'>
            <ImageContainer />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero