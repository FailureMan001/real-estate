/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'

import { ImageContext } from '../ImageContext';

import Slider from '../layout/Slider';
const Home = () => {
  const data = useContext(ImageContext)

  const result = data.imageData.map((e)=>{
    return e.image
  })

  return (
    <div className='container mx-auto -mt-3'>
      <div 
      className='flex lg:pt-[200px] lg:pb-[200px] bg-blue-100 bg-fixed' 
      style={{
          backgroundImage:`url(${result[7]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}>
          
        <div className='relative mx-auto lg:top-9 lg:-left-[18rem]' >
          <div className='flex items-center top-5 w-[350px] h-[350px] bg-blue-900 bg-opacity-75'>
            <div className='w-full p-6'>
            <div className=' w-48 mx-auto pt-6 border-b-2 border-orange-500  text-center text-2xl text-blue-200 '>
              <span className='font-link'>ราคาเริ่มต้น<br/>2.xxลบ.</span>
              
            </div>
            <div className='p-2 text-center text-lg text-gray-200 font-link'>จองเพียง<br/>999 บ.</div>
          </div>
            </div>
        </div>
      </div>

      {/* Proprety */}
      <div className='section bg-blue-100'>
        <div className='section-title'>OUR PROJECT</div>
        <div className='section-subtitle'>Exlore our rich and diverse portfolio</div>
        <div className='flex justify-center flex-wrap'>
          <div className='card'>
            <p className='font-link card-title'>57 - 100 ตรว</p>
          </div>
          <div className='card'>
            <p className='font-link card-title'>3 ห้องนอน</p>
          </div>
          <div className='card'>
            <p className='font-link card-title'>2 ห้องน้ำ</p>
          </div>
          <div className='card'>
            <p className='font-link card-title'>2 ที่จอดรถ</p>
          </div>
        </div>
      </div>

      {/* Project */}
      <div className='section bg-blue-200'>
        <div className='section-title'>OUR PROJECT</div>
        <div className='section-subtitle'>Exlore our rich and diverse portfolioExlore our rich and diverse portfolioExlore our rich and diverse portfolio</div>
      </div>

      {/* Project */}
      <div className='section bg-blue-200'>
        <Slider/>
      </div>

        {/* Project */}
      <div className='section bg-blue-100'>
        <div className='flex flex-wrap text-center text-white'>
          <div className='w-full md:w-1/3 p-5'>
            <div className='w-full h-[350px] object-cover drop-shadow-2xl' 
      style={{

          backgroundImage:`url(${result[8]})`,
          backgroundRepeat: "no-repeat",
          
        }}
        
        ></div>
          </div>
          <div className='w-full md:w-1/3 p-5  md:text-left'>
            <p className='p-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.</p>
          </div>
          <div className='w-full md:w-1/3 p-5  md:text-left'>
            <p className='p-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.</p>
          </div>
        </div>
      </div>

        <div className='section bg-blue-200'>

          <div className='section-title'>Facilities</div>
          <div className='section-subtitle'>Exlore our rich and diverse portfolio</div>
          <div className='flex justify-center flex-wrap'>

          <div className='card-Facilities'>
            <img src={result[13]} className='card-image '/>
            <p className='card-Facilitie'>MM</p>
            <p className='card-Facilitie-sub'>UI Design</p>
          </div>

          <div className='card-Facilities'>
            <img src={result[12]} className='card-image '/>
            <p className='card-Facilitie'>MM</p>
            <p className='card-Facilitie-sub'>UI Design</p>
          </div>
          <div className='card-Facilities'>
            <img src={result[11]} className='card-image '/>
            <p className='card-Facilitie'>MM</p>
            <p className='card-Facilitie-sub'>UI Design</p>
          </div>
          <div className='card-Facilities'>
            <img src={result[10]} className='card-image '/>
            <p className='card-Facilitie'>MM</p>
            <p className='card-Facilitie-sub'>UI Design</p>
          </div>


          </div>
         

        </div>
        
    </div>
  )
}

export default Home