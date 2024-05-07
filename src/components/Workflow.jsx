import React from 'react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constant'
import { CheckCheckIcon } from 'lucide-react'

const Workflow = () => {
  return (
    <div className='mt-10 text-center'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking wide'>Accelerate your 
        <span className='bg-gradient-to-r from-orange-500 to-orange-800  text-transparent  bg-clip-text'>
              {" "}  coding workflow.
        </span>
      </h2>
      <div className='flex m-10 sm: flex-wrap sm:w-full'>
        <div className='lg:w-1/2 w-full'>
        <img src={codeImg} alt="" />
        </div>
        <div className='pt-13 w-full lg:w-1/2 mt-5 text-left'>
                {checklistItems.map((item, index) => (
                     <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 leading-3 p-2 justify-center items-center text-center rounded-full'>
                         <CheckCheckIcon/>
                        </div>
                        <div>
                                <h5 className='mt-1 mb-1 text-xl'>
                                      {item.title}  
                                </h5>
                                <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                     </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow

