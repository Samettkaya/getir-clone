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
    <div className='container mx-auto px-[35px] '>
        <div className='grid grid-cols-3 mt-16  gap-x-4 text-center '>
        {cards.map((card) => 
            <div className='bg-white flex flex-col gap-y-2  items-center rounded-lg px-4 pt-[60px] pb-[40px]'>
                <img src={card.image}/>
                <h3 className='text-lg text-[#5d3ebc] font-semibold tracking-[-0.028px] mt-[14px]'>{card.title}</h3>
                <p className='text-sm text-[#697488] '>{card.description}</p>
            </div>
            )}
        </div>
    </div>
  );
};
