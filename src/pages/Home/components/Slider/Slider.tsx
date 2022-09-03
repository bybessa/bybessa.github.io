/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import Trees from '../../../../assets/slider/trees.png';
import Logs from '../../../../assets/slider/logs.png';
import Saw from '../../../../assets/slider/saw.png';
import Torno from '../../../../assets/slider/torno.png';
import './styles.css';

const images = [
  { src: Trees, text: '"Fazemos do meio ambiente nosso meio de vida."' },
  { src: Logs, text: 'Nossa  matéria prima é orgânica, renovável e sustentável fazendo com que  os impactos ambientais sejam menores.' },
  { src: Saw, text: 'O desdobro da tora da madeira é utilizado para melhor aproveitamento e aplicação.' },
  { src: Torno, text: 'A peça de autor é diferenciada, original e exclusiva.' },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLImageElement>(null);
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleScroll = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
        handleScroll(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        handleScroll(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <div ref={sliderRef} className='relative w-[100vw]'>
      <ul ref={scrollRef} className='flex overflow-y-auto snap-mandatory snap-x scrolling-touch slider bg-black'>
        {images.map((image, index) => (
          <li key={index} className='relative flex-none snap-center h-[45vh] md:h-[65vh]'>
            <img src={image.src} alt={image.text} className='w-full h-full object-cover opacity-60' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <p className='text-2xl font-bold text-white text-center'>{image.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='absolute bottom-3 left-0 right-0 flex justify-center gap-3'>
       {images.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-300' : 'bg-white'} cursor-pointer transition ease-out`} onClick={() => handleScroll(index)} />
        ))}
      </div>
    </div>
  );
}
