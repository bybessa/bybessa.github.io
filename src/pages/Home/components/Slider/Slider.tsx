/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import Trees from '../../../../assets/slider/trees.png';
import Logs from '../../../../assets/slider/logs.png';
import Saw from '../../../../assets/slider/saw.png';
import Torno from '../../../../assets/slider/torno.png';

const images = [
  {src: Trees, text: '"Fazemos do meio ambiente nosso meio de vida. "'},
  {src: Logs, text: 'Nossa  matéria prima é orgânica, renovável e sustentável fazendo com que  os impactos ambientais sejam menores.'},
  {src: Saw, text: 'O desdobro da tora da madeira é utilizado para melhor aproveitamento e aplicação.'},
  {src: Torno, text: 'A peça de autor é diferenciada, original e exclusiva.'},
]

let count: number = 0
let interval: any
let startX: number = 0
let dist: number = 0

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef<HTMLImageElement>(null);
  const [swipedir, setSwipedir] = useState<'none' | 'right' | 'left'>('none');

  useEffect(() => {
    sliderRef.current?.addEventListener('animationstart', () => setIsPlaying(true));
    sliderRef.current?.addEventListener('animationend', removeAnimation)
    sliderRef.current?.addEventListener('mouseenter', stopSlider)
    sliderRef.current?.addEventListener('mouseleave', startSlider)
    sliderRef.current?.addEventListener('touchstart', handleTouchStart, false);        
    sliderRef.current?.addEventListener('touchmove', handleTouchMove, false);

    startSlider();
  }, []);
  
  useEffect(() => {
    if(swipedir === 'left') {
      handleNext(true);
    } else if(swipedir === 'right') {
      handlePrev(true);
    }
  } , [swipedir]);

  const removeAnimation = () => {
    setIsPlaying(false);
    sliderRef.current?.classList.remove('fade-anim')
  }

  const startSlider = () => {
    interval = setInterval(() => {
      handleNext(false);
    }, 10000);
  };

  const stopSlider = () => {
    clearInterval(interval);
  }

  const handleNext = (skipAnim: boolean) => {
    if(!isPlaying || skipAnim) {
      count = (count + 1) % images.length
      setCurrentIndex(count);
      sliderRef?.current?.classList.add('fade-anim');
    }
  }

  const handlePrev = (skipAnim: boolean) => {
    if(!isPlaying || skipAnim) {
      count = (count - 1) % images.length
      if(count < 0) {
        count = images.length - 1;
      }
      setCurrentIndex(count);
      sliderRef?.current?.classList.add('fade-anim');
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touchobj = e.changedTouches[0];
    setSwipedir('none');
    dist = 0;
    startX = touchobj.pageX;
  }

  const handleTouchMove = (e: TouchEvent) => {
    const touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    if (Math.abs(dist) > 20) {
      setSwipedir(dist < 0 ? 'left' : 'right');
    }
  }

  const handleBulletClick = (index: number) => {
    if(!isPlaying) {
      setCurrentIndex(index);
      sliderRef?.current?.classList.add('fade-anim');
    }
  }

  return (
    <div ref={sliderRef} className='relative flex justify-center items-center bg-black'>
      <div className='w-screen overflow-hidden'>
        <img src={images[currentIndex].src} alt='' className='opacity-70 w-full h-[35vh] lg:h-[60vh]'/>
      </div>
      <div className='absolute flex justify-center items-center w-full gap-5 bottom-3 transform -translate-y-1/2 px-3'>
        {
          images.map((_, index) => {
            return <div key={index} className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'} cursor-pointer`} onClick={() => handleBulletClick(index)}></div>
          })
        }
      </div>
      <div className='absolute w-3/5 top-1/2 transform -translate-y-1/2 px-3'>
        <p className='text-white text-center text-xl lg:text-5xl'>{images[currentIndex].text}</p>
      </div>
    </div>
  )
}
