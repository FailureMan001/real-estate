import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-blue-900'>
      <div className='flex flex-wrap text-center text-white'>
        {/* About Column */}
        {/* <div className='w-full  p-5 border-r border-blue-800 md:text-center'>
          <div className='my-6 ml-3 text-xl font-semibold'>ABOUT US</div>
          <p className='p-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.</p>
          <p className='p-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, dolor.</p>
        </div> */}
        {/* Contact Column */}
        <div className='w-full  p-5 border-r border-blue-800 md:text-center'>
          <div className='my-6 ml-3 text-xl font-semibold'>CONTACT US</div>
          <p className='mt-8 text-gray-400'>
              Rambuttre Street<br/>
              Bangkok, BK 5555 <br/>
              Thailand<br/>
              <strong>Phone:</strong> +66 11 111 1111<br/>
              <strong>Email:</strong> info@gmail.com
          </p>
         
        </div>

        {/* From Column */}
        {/* <div className='w-full md:w-1/3 p-5'>
          <div className="my-6 ml-3 text-xl font-semibold">SAY HELLO!</div>
          <form className='w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded'>
            <div className='flex items-center mb-4'>
              <input type='text' placeholder='Username' className='w-full h-10 p-2 border-b border-blue-800 bg-blue-900' />
            </div>
            <div className='flex items-center mb-4'>
              <input type='email' placeholder='Email' className='w-full h-10 p-2 border-b border-blue-800 bg-blue-900' />
            </div>
            <div className='mb-6'>
              <textarea placeholder='Message' className='w-full h-24 px-2 pt-2 border-b border-blue-800 bg-blue-900 text-white'></textarea>
              <div className='flex justify-between items-center'>
                <button type='button' className='w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 font-bold'>SEND</button>
              </div>
            </div>
          </form> 
        </div> */}
        
        
      </div>
    </div>
  )
}

export default Footer