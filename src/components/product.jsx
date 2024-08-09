import React, { useState } from "react";

const Product = () => {
  const [isTrue, setIsTrue] = useState(true);

  const [counter, setCounter] = useState(1);

  function decrementCounter() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className=" relative w-[200px]">
      <img src="/images/1.jpg" alt="" className="rounded-lg" />

      <div className="">
        <button
          onClick={() => setIsTrue(false)}
          className="border gap-3  hover:text-[#CF5630] duration-300 transition-all border-[#CF5630] flex rounded-full py-1 px-3 left-7 text-[15px] font-semibold bg-white  top-[174px]   absolute"
        >
          <img
            src="/images/icon-add-to-cart.svg"
            className="mt-1  mr-1"
            alt=""
            width={16}
          />
          Add to Cart
        </button>
      </div>

      <div className={`${isTrue === true ? "hidden" : "block"}`}>
        <button
          onClick={() => setIsTrue(false)}
          className="border   text-white  gap-9 bg-[#CF5630] duration-300 transition-all border-[#CF5630] flex rounded-full py-1 px-3 left-7 text-[15px] font-semibold  top-[174px]   absolute"
        >
          <img
            src="/images/icon-decrement-quantity.svg"
            className="border  rounded-full py-2 px-1"
            alt=""
            onClick={decrementCounter}
          />
          {counter}
          <img
            src="/images/icon-increment-quantity.svg"
            className="border rounded-full py-1  px-1"
            onClick={() => setCounter((previousCounter) => previousCounter + 1)}
            alt=""
          />
        </button>
      </div>

      <p className="text-[#c9aea6] text-[14px] mt-5">Waffle</p>
      <h1 className="font-bold text-[16px]">Waffle with Berries</h1>
      <p className="text-[#A77667] font-semibold">$6.50</p>
    </div>
  );
};

export default Product;
<s></s>;
