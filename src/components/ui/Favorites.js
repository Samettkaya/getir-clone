import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
function Favorites({product}) {

  return (	<div className="py-3 px-2 bg-white">
  <picture className="relative block">
      <button className="w-8 h-8 flex absolute top-0 right-2 border shadow-md rounded-lg border-gray-200 text-[#5d3ebc] transition-colors bg-white hover:bg-purple-50 items-center justify-center">
          <AiOutlinePlus />
      </button>
      <img src={product.image} className="w-full"/>
  </picture>
  <div className="flex flex-col items-center text-center gap-y-1">
      <div className="text-sm font-semibold text-[#5d3ebc]">{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</div>
      <div className="text-sm font-semibold">{product.title}</div>
      <div className="text-sm font-semibold text-gray-500">{product.alt}</div>
  </div>
</div>)
}

export default Favorites;
