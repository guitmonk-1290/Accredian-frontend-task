import React, { useState, useEffect } from 'react'
import styles from '../style'

const ImageContainer = () => {

  return (
    <div className={`${styles.flexCenter} ml-16 max-w-[650px] max-h-[370px] bg-blue-gradient p-[2px]`}>
      <div className={`${styles.flexStart} w-full h-full overflow-hidden`}>
        <img
          src='/images/referral-3.jpg'
          alt='image'
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default ImageContainer