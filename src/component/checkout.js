import React from 'react'

function checkout(item) {
  const data = item.data
  const handleDelete =()=>{
console.log(item.index);

const cart = item.cart
cart.splice(item.index, 1);
item.setCart([...cart])

  }
  return (
    <div className='w-full bg-slate-300 rounded-md mx-4 flex flex-row mt-5'>
    <div className='w-1/3 pl-2 py-2'>
      <img className="rounded-t-lg" src={data.picture} alt=""/>
    </div>
    <div className='w-2/3 py-2 pl-2'>
        <h1 className="text-gray-900 text-xl font-medium mb-2">{data.name}</h1>
        <p className="text-gray-700 text-base mb-4">Rp {data.price}</p>
        <div className='flex justify-end mr-5'>
        <button onClick={handleDelete} type="button" className=" inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
        </div>
    </div>
    </div>
  )
}

export default checkout