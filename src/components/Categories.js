import React ,{useEffect, useState}from 'react';
import categoriesData from '../api/categories.json';
import CategoryItem from './ui/Category.js';

export const Categories = () => {
  
  const [categories, setCategories] = useState([])

	useEffect(() => {
		setCategories(categoriesData)
	}, [])

  return(
    <div className='  laptop:h-[308.59px] category-shadow pt-3 pb-4 bg-[#F5F5F5] md:bg-white md:py-6'>
      <div className=' md:container :mx-auto md:px-[32px] '>
          <h6 className='md:px-0 px-4  mb-2  text-sm font-semibold'>Kategoriler</h6>
          <div className=' grid grid-cols-4  md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-12 md:gap-4'>
            {categories && categories.map(category => <CategoryItem key={category.id} category={category} />)}
          </div>
      </div>
      
    </div>
  );
};
