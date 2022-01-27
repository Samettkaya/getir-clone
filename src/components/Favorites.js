import React, { useEffect, useState } from 'react';
import Products from '../api/product.json';
import Favorite from './ui/Favorites.js'
export const Favorites = () => {
    const [products, setProducts] = useState([])

	useEffect(() => {
		setProducts(Products)
	}, [])
  return (
      
        <div className='container mx-auto  px-[35px] mt-8'>
                    <h5 className='text-[#191919] text-sm font-semibold'> Favoriler </h5>
                    <div className='mt-2  rounded-lg grid grid-cols-8 gap-0.5'>
                         
                    {products && products.map(product => <Favorite product={product}/>)}
                    </div>
                    
        </div>
    );
};
