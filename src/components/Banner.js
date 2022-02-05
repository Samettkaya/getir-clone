import React from 'react';
const cards = [
    {
        title: 'Her siparişinize bir kampanya',
        description: 'Getir\'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
        image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'
    },
    {
        title: 'Dakikalar içinde kapınızda',
        description: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
        image: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'
    },
    {
        title: 'Binlerce çeşit mutluluk',
        description: 'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
        image: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'
    }
]
export const Banner = () => {
  return (
    <div className='md:container mx-auto md:px-[32px] px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3  mt-4 md:mt-[56px]  gap-x-4 text-center '>
        {cards.map((card) => 
            <div className='bg-white shadow-banner flex flex-col gap-y-2 mb-4  md:mb-0 items-center md:rounded-lg px-4  py-8 md:pt-[60px] md:pb-[40px]'>
                <img className='w-[150px] h-[150px]' src={card.image}/>
                <h3 className='text-base md:text-lg text-[#5d3ebc] font-semibold tracking-[-0.028px] mt-[14px]'>{card.title}</h3>
                <p className='text-sm text-[#697488] leading-6'>{card.description}</p>
            </div>
            )}
        </div>
    </div>
  );
};
