/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Catalogue, Slider } from './components'
import './styles.css';

export const Home = () => {
  return (
    <div className='bg-gray-100 overflow-x-hidden'>
      <Slider />
      <Catalogue />
    </div>
  )
}
