import { useState } from "react";
import "./App.css";
import Card from "./component/card";
import Checkout from "./component/checkout";

function App() {
  const products = [
    {
      id: 1,
      name: "Beras",
      picture: "https://ipanganan.com/images/banner1a.png",
      price: 10000,
    },
    {
      id: 2,
      name: "Teh",
      picture: "https://cf.shopee.co.id/file/2c559cae36b8f0b9008a73cfe861927d",
      price: 9000,
    },
    {
      id: 3,
      name: "Gula",
      picture:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/11/6/556a6450-25f6-41d2-8cc3-07f35d4989e7.jpg",
      price: 14000,
    },
    {
      id: 4,
      name: "Kopi",
      picture:
        "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/05/11/2929532943.png",
      price: 8000,
    },
    {
      id: 5,
      name: "Telur",
      picture:
        "https://cdn-2.tstatic.net/batam/foto/bank/images/telur-ayam_20180416_112847.jpg",
      price: 12000,
    },
    {
      id: 6,
      name: "Jeruk",
      picture:
        "https://png.pngtree.com/png-clipart/20201208/original/pngtree-stack-cut-oranges-png-image_5529928.jpg",
      price: 18000,
    },
    {
      id: 7,
      name: "Apel",
      picture:
        "https://png.pngtree.com/png-clipart/20190614/original/pngtree-photo-realistic-of-red-apple-full-editable-isolated-on-white-png-image_3718196.jpg",
      price: 28000,
    },
  ];
  const [cart,setCart] = useState([])
  return (
    <div className="w-full bg-neutral-400 flex justify-between pl-6 pr-40 pt-16 pb-9">
      <div className="w-2/3 grid grid-cols-3 gap-4">
        {products.map((item, index) => {
          return (
            <div key={index}>
              <Card data={item} cart={cart} setCart={setCart} />
            </div>
          );
        })}
      </div>
      <div className=" w-1/3 h-auto rounded-xl bg-white pt-3">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <select
              class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>select users</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="w-11/12">
          {cart.map((item,index)=>{
            return(
              <div key={index}>
                <Checkout data={item} index={index} cart={cart} setCart={setCart} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
