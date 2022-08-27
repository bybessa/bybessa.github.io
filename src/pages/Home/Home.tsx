/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Catalogue, Slider } from './components'

export const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Slider />
      <Catalogue />
    </div>
  )
}
