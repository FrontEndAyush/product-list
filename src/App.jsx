import { useEffect, useState } from "react";
import Product from "./components/product";

function App() {
  let [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState(true);

  const newIndexes = [];

  const [counter, setCounter] = useState(1);
  const [ind, setInd] = useState(null);

  function decrementCounter() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  async function dataRequest() {
    const data = await fetch("/images/data.json");
    const response = await data.json();
    setData(response);
  }

  function validation(index) {
    let indexes = "";
    indexes += index;
    console.log(indexes);
    setIsTrue((previouseValue) => !previouseValue);
  }

  useEffect(() => {
    dataRequest();
  }, []);
  return (
    <>
      <main>
        <div>
          {data.map((response, index) => (
            <div className=" relative w-[200px]" key={index}>
              <img
                src={`${response.image.desktop}`}
                alt=""
                className="rounded-lg"
              />

              <div className="">
                <button
                  onClick={() => validation(index)}
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

              <div
                className={`${
                  isTrue == false && index == 234 ? "block" : "hidden"
                }`}
              >
                <button className="border   text-white  gap-9 bg-[#CF5630] duration-300 transition-all border-[#CF5630] flex rounded-full py-1 px-3 left-7 text-[15px] font-semibold  top-[174px]   absolute">
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
                    onClick={() =>
                      setCounter((previousCounter) => previousCounter + 1)
                    }
                    alt=""
                  />
                </button>
              </div>

              <p className="text-[#c9aea6] text-[14px] mt-5">
                {response.category}
              </p>
              <h1 className="font-bold text-[16px]">{response.name}</h1>
              <p className="text-[#A77667] font-semibold">{response.price}</p>
            </div>
          ))}
        </div>

        <div></div>
      </main>
    </>
  );
}

export default App;
