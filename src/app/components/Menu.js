import React from 'react'

function Menu() {
  return (
    <div className='Menu-item h-[672px] w-full flex'>

        {/* right div with image */}
    
        <div className='w-0 md:w-[10%]'> <img src='Frame.svg'/> </div>



        <div className='w-full md:w-[80%]  flex sm:items-center  py-20 px-4 md:px-0'>

        <div className='w-full  h-[445px] sm:h-auto  xl:h-[550px] 2xl:h-[416px] border-[1px] border-white relative'>
            <img className = 'absolute -top-20 sm:-top-36 -left-6 sm:-left-10 xl:-left-14 w-20 sm:w-36 xl:w-auto' src='cocktail.svg' />
            <img className = 'absolute -bottom-5 sm:-bottom-10 -right-1 w-20  sm:w-36 xl:w-auto' src='cocktail1.svg' />


               <div className='flex justify-center py-8 sm:py-16'>   
                <img src='/BRUNCHCOCKTAILS.SVG' className='w-64 sm:w-auto'/>
               </div>

              <div className='flex flex-col xl:flex-row'>
              <div className='px-10'>
                <h1 className='text-white font-normal text-[16px] sm:text-[26px]'>CINNAMON TOAST CRUNCH..........................$16</h1>
                <p className='text-slate-500 text-[14px] sm:text-[18px]'>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>

                <h1 className='text-white font-normal text-[16px] sm:text-[26px]'>MOET SPRITZ..................................................$20</h1>
                <p className='text-slate-500 text-[14px] sm:text-[18px]'>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
               </div>



               <div className='px-10 pb-10   xl:pb-0'>
                <h1 className='text-white font-normal text-[16px] sm:text-[26px]'>BAR 42 MARY..................................................$14</h1>
                <p className='text-slate-500 text-[14px] sm:text-[18px]'>Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
               </div>
              </div>
            
            </div>

        </div>



        {/* left div with image */}
        <div className='w-0 md:w-[10%] flex justify-end'><img src='Frame1.svg'/></div>

    </div>
  )
}

export default Menu