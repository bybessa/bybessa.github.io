/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import Trees from '../../assets/trees.jpg';
import Logs from '../../assets/log.jpg';
import Saw from '../../assets/saw.jpg';
import Torno from '../../assets/torno.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [
  {src: Trees, text: '"Fazemos do meio ambiente nosso meio de vida. "'},
  {src: Logs, text: 'Nossa  matéria prima é orgânica, renovável e sustentável fazendo com que  os impactos ambientais sejam menores.'},
  {src: Saw, text: 'O desdobro da tora da madeira é utilizado para melhor aproveitamento e aplicação.'},
  {src: Torno, text: 'A peça de autor é diferenciada, original e exclusiva.'},
]

let count: number = 0
// let interval: any

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    sliderRef.current?.addEventListener('animationstart', () => setIsPlaying(true));
    sliderRef.current?.addEventListener('animationend', removeAnimation)
    // sliderRef.current?.addEventListener('mouseenter', stopSlider)
    // sliderRef.current?.addEventListener('mouseleave', startSlider)

    // startSlider();
  }, []);
  

  const removeAnimation = () => {
    setIsPlaying(false);
    sliderRef.current?.classList.remove('fade-anim')
  }

  // const startSlider = () => {
  //   interval = setInterval(() => {
  //     handleClickNext();
  //   }, 10000);
  // };

  // const stopSlider = () => {
  //   clearInterval(interval);
  // }

  const handleClickNext = () => {
    if(!isPlaying) {
      count = (count + 1) % images.length
      setCurrentIndex(count);
      sliderRef?.current?.classList.add('fade-anim');
    }
  }

  const handleClickPrev = () => {
    if(!isPlaying) {
      count = (currentIndex + images.length - 1) % images.length
      setCurrentIndex(count);
    }
  }

  return (
    <div ref={sliderRef} className='flex justify-center items-center overflow-hidden bg-black'>
      <img src={images[currentIndex].src} alt='' className='flex-shrink-0 opacity-70 lg:w-[100%] max-w-[fit-content] lg:max-w-[100%]'/>
      <div className='flex justify-between items-center absolute w-full top-1/2 transform -translate-y-1/2 px-3'>
        <ChevronLeftIcon className='h-14 w-14 p-2 text-white cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 rounded-full' onClick={handleClickPrev}/>
        <ChevronRightIcon className='h-14 w-14 p-2 text-white cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 rounded-full' onClick={handleClickNext} />
      </div>
      <div className='absolute w-3/5 top-1/2 transform -translate-y-1/2 px-3'>
        <p className='text-white text-center text-xl lg:text-5xl'>{images[currentIndex].text}</p>
      </div>
    </div>
  )
}
