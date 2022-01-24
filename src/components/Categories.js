import React ,{useEffect, useState}from 'react';
import categoriesData from '../api/categories.json';
import CategoryItem from './ui/Category.js';

export const Categories = () => {
  
  const [categories, setCategories] = useState([])

	useEffect(() => {
		setCategories(categoriesData)
	}, [])

  return(
    <div className='  h-[308px] bg-white py-6'>
      <div className='container mx-auto px-[35px] '>
          <h6 className='mb-2 text-sm font-semibold'>Kategoriler</h6>
          <div className=' grid grid-cols-10 gap-4'>
            {categories && categories.map(category => <CategoryItem key={category.id} category={category} />)}
          </div>
      </div>
      
    </div>
  );
};
