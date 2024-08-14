import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState(true);

  const [indexesArray, setindexesArray] = useState([]);

  const [counter, setCounter] = useState(1);

  function decrementCounter(index) {
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
    setindexesArray((previousIndexesArray) => {
      return [...previousIndexesArray, index];
    });

    console.log(indexesArray);
    setIsTrue((previouseValue) => !previouseValue);
  }

  useEffect(() => {
    dataRequest();
  }, []);
  return (
    <>
      <main className="container mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-5 ml-16">Desserts</h1>

        <div className="flex justify-around">
          <div className="w-2/4 grid grid-cols-3 gap-y-10 gap-x-5">
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
                    isTrue == false && indexesArray.includes(index)
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <button className="border   text-white  gap-9 bg-[#CF5630] duration-300 transition-all border-[#CF5630] flex rounded-full py-1 px-3 left-7 text-[15px] font-semibold  top-[174px]   absolute">
                    <img
                      src="/images/icon-decrement-quantity.svg"
                      className="border  rounded-full py-2 px-1"
                      alt=""
                      onClick={() => decrementCounter(index)}
                    />
                    {indexesArray.includes(index) ? counter : 0}
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
                <p className="text-[#A77667] font-semibold">${response.price}</p>
              </div>
            ))}
          </div>

          <div className=" bg-white rounded-sm w-[400px] min-h-48 h-[300px]">
            <h1 className="text-2xl text-[#BA3D19] font-bold mt-4 ml-5 ">
              Your Cart (0)
            </h1>
            <div className={`${isTrue ===  true? "block" : "hidden"} `}>
              <img
                src="/images/illustration-empty-cart.svg"
                alt=""
                className="mx-auto mt-9"
              />
              <p className="text-center text-[##9C8784] font-medium mt-6">
                Your added were appear here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
