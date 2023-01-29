import React, { useState } from 'react'

export default function Slide() {
    const [currentSlide, setCurentSlide] = useState(0)

    const prevSlide = () => {
        setCurentSlide(currentSlide === 0 ? 2 : (prev)=>prev - 1);
    }
    const nextSlide = () => {
        setCurentSlide(currentSlide === 2 ? 0 : (prev)=>prev + 1);
    }
 
  return (
    <div className='slide'>
     <div className='container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
       <div className='card'>rwot</div>
       <div className='card'>odida</div>
       <div className='card'>ladit</div>
      </div>

      <div className='bn'>
        <button className='bt' onClick={prevSlide}>L</button>
        <button className='bt' onClick={nextSlide}>R</button>
      </div>
    </div>
  )
}
