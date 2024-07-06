import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Button = ({ triggerModal, label }) => {
  return (
    <div className={`${styles.flexCenter} max-w-[240px] rounded-2xl bg-blue-gradient p-[2px] cursor-pointer mb-8`}
    onClick={triggerModal}
    >
      <div className={`${styles.flexCenter} flex-col bg-blue-800 rounded-2xl w-[100%] h-[100%] hover:bg-blue-600 p-[8px]`}>
          <div className={`${styles.flexStart} flex-row px-2`}>
            <p className='font-poppins font-medium text-[16px] leading-[23px]'>
              <span className='text-white'>{label}
              </span>
            </p>

            {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
          </div>
      </div>
    </div>
  )
}

export default Button