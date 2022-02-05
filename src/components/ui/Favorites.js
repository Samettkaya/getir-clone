import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
function Favorites({product}) {

    return (	
        <div className="py-2 px-[5px] laptop:py-3 laptop:bg-white laptop:px-2 ">
            <picture className=" mb-2  relative block">
                <button className="w-[34px] h-[34px] flex absolute -top-2 m:top-0 m:right-0 l:right-1 l:top-0 s:top-0 s:right-0 laptop:right-[27px]  tablet:right-[18px] border shadow-md rounded-lg border-gray-200 text-[#5d3ebc] transition-colors bg-white hover:bg-purple-50 items-center justify-center">
                    <AiOutlinePlus />
                </button>
                <div className=' p-[10px] tablet:p-0 flex items-center justify-center'>
                    <img src={product.image} className="tablet:w-24 tablet:h-24 laptop:w-[120px] laptop:h-[120px]   s:w-20 s:h-20  border md:border-0 sm:border-[#f3f0fe] rounded-lg"/>
                </div>
            </picture>
            <div className="flex flex-col items-center text-center ">
                <div className="text-sm leading-[18px] mb-2 font-semibold text-[#5d3ebc]">{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</div>
                <div className="text-sm leading-[18px] mb-[6px] tracking-[0.16px] font-semibold">{product.title}</div>
                <div className="text-sm font-normal text-[#697488]">{product.alt}</div>
            </div>
        </div>
    )
}

export default Favorites;
