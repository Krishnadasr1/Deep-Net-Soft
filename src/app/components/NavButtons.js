import React from 'react'

function NavButtons() {
  return (
    <div className='Navbutton w-full h-[79px] flex justify-center '>
        <div className='w-[250px] sm:w-[370px] flex justify-between items-center'>
        <button className='bg-black text-white border-[#0796EF] border-[1px] h-[32px] sm:h-[50px] w-[72px] sm:w-[115px] text-[12px] sm:text-[16px] font-bold hover:bg-[#0796EF] duration-300'>FOOD</button>
        <button className=' text-white border-[#0796EF] border-[1px] h-[32px] sm:h-[50px] w-[72px] sm:w-[115px] text-[12px] sm:text-[16px] bg-[#0796EF] font-bold hover:bg-[#000000] duration-300'>DRINKS</button>
        <button className='bg-black text-white border-[#0796EF] border-[1px] h-[32px] sm:h-[50px] w-[72px] sm:w-[115px] text-[12px] sm:text-[16px] font-bold hover:bg-[#0796EF] duration-300'>BRUNCH</button>
        </div>
    </div>
  )
}

export default NavButtons