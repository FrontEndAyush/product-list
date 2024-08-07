import React from "react";

const Product = () => {
  return (
    <div className=" relative w-[200px]">
      <img src="/images/1.jpg" alt="" />

      <button className="border hover:text-[#CF5630] duration-300 transition-all border-[#CF5630] flex rounded-full py-1 px-3 left-7 text-[15px] font-semibold bg-white  top-[174px]   absolute">
        <img
          src="/images/icon-add-to-cart.svg"
          className="mt-1  mr-1"
          alt=""
          width={16}
        />
        Add to Cart
      </button>
      <p className="text-[#c9aea6] mt-5">Waffle</p>
      <h1 className="font-bold text-[16px]">Waffle with Berries</h1>
      <p className="text-[#A77667] font-semibold">$6.50</p>
    </div>
  );
};

export default Product;
<s></s>;
