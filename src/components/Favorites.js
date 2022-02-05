import React, { useEffect, useState } from 'react';
import Products from '../api/product.json';
import Favorite from './ui/Favorites.js'
export const Favorites = () => {
    const [products, setProducts] = useState([])

	useEffect(() => {
		setProducts(Products)
	}, [])

    return (
        <div className=' md:container md:mx-auto  s:pt-3 m:pt-3 l:pt-3 md:px-[32px] tablet:pt-0 md:mt-8 bg-white  md:bg-opacity-0 '>
            <h5 className='text-[#191919]  m:pb-2 l:pb-2  s:pb-2 md:py-0 sm:bg-white  md:bg-opacity-0 l:px-4 m:px-4 s:px-4 tablet:px-0 text-sm font-semibold'> Favoriler </h5>
            <div className='tablet:bg-white laptop:bg-opacity-0 tablet:px-0 rounded-[4px] grid grid-cols-3 l:px-4 gap-[1px] md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10'>
                {products && products.map(product => <Favorite product={product}/>)}
            </div>
        </div>
    );
};
