import React from "react";

function Hero() {
  return (
    <div className=" h-[231px] sm:h-[311px] Hero-bg  ">
      <div className="w-auto h-full flex justify-center items-center flex-col gap-y-4 px-[10px]  sm:lg:px-[300px] 2xl:px-[480px] bg-[#00000017]">
        <img src="/menu.svg" alt="menu" className="w-[95px] sm:w-auto" />

        <p className="text-[#bbbbbb] text-[16px] sm:text-[18px] text-center ">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
}

export default Hero;