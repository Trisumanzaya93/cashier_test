import React from 'react'

function card(item) {
  const data = item.data
  const handleClick = ()=>{
    const cart = item.cart
    const filter = cart.filter((items)=>items.name===data.name)
    if(filter.length===0){
      item.setCart([...cart,data])
    }
  }
  return (
    <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-[200px]">
    <div className='w-full h-44 justify-center'>
      <img className="rounded-t-lg" src={data.picture} alt=""/>
    </div>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{data.name}</h5>
      <p className="text-gray-700 text-base mb-4">Rp {data.price}</p>
      <button onClick={handleClick} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add To Card</button>
    </div>
  </div>
</div>
  )
}

export default card