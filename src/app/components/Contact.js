import React from 'react'

function Contact() {
  return (
    <div className='bg-black flex flex-col lg:flex-row pt-28 px-4 lg:px-36 justify-between gap-y-4 lg:gap-y-0 pb-16'>
        <div className='border-white border-[1px] px-[40px] xl:px-[70px] 2xl:px-28 py-6 flex justify-center items-center flex-col gap-y-1 rounded-[15px]'>
            <h2 className='text-[#0796EF] text-[16px] font-medium pb-3'>CONNECT WITH US</h2>
            <p className='text-[16px] text-[#857878] font-normal'>+91 8289784738</p>
            <p className='text-[16px] text-[#857878] font-normal'>albinanto@gmail.com</p>
        </div>

        <div className='border-white border-[1px] order-first lg:order-none px-8 xl:px-16 py-14 lg:py-6 flex justify-center items-center flex-col gap-y-1 rounded-[15px] relative'>
            <img src='/Logo.svg' className='absolute -top-10'/>
            <h2 className='text-[20px] xl:text-[35px] font-normal '><span className='text-[#0796EF]'>DEEP</span> <span className='text-white'>NET</span> <span className='text-[#857878]'>SOFT</span></h2>
            
        </div>

        <div className='border-white border-[1px] px-[40px] xl:px-[70px] 2xl:px-28 py-6 flex justify-center items-center flex-col gap-y-1 rounded-[15px]'>
            <h2 className='text-[#0796EF] text-[16px] font-medium pb-3'>FIND US</h2>
            <p className='text-[16px] text-[#857878] font-normal'>First floor</p>
            <p className='text-[16px] text-[#857878] font-normal'>Paatukulam buliding</p>
        </div>

    </div>
  )
}

export default Contact