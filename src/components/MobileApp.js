import React from 'react';

export const MobileApp = () => {
    return (
        <div className='md:container mx-auto md:px-[32px]  '>
            <div className='md:my-6 l:px-4 m:px-4 s:px-4 tablet:p-0 md:rounded-lg bg-[#5d3ebc]  md:bg-mobile-app h-[312px] flex items-center justify-between'>
                <div className='md:pl-12 taplet:h-[270px] laptop:h-[182px] sm:py-4 md:py-0 text-white laptop:grid laptop:items-center'>
                    <h2 className='text-2xl md:text-[26px] tracking-[-1px] font-bold mb-3 leading-2 '>Getir'i indirin!</h2>
                    <span className=' font-semibold text-base '>İstediğiniz ürünleri dakikalar içinde kapınıza <br className='s:hidden laptop:block'/> getirelim.</span>
                    <div className='laptop:flex items-center justify-center mt-4 md:mt-8  gap-x-1.5'>
                        <a className='cursor-pointer '>
                            <img className='s:mb-2 m:mb-2 l:mb-2 tablet:mb-2 laptop:mb-0' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
                        </a>
                        <a className='cursor-pointer'>
                            <img className='s:mb-2 m:mb-2 l:mb-2 tablet:mb-2 laptop:mb-0' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
                        </a>
                        <a className='cursor-pointer'>
                            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
                        </a>                       
                    </div>
                </div>
                <div className='hidden md:block tablet:mt-[151px] tablet:w-[370px] laptop:w-[503px] laptop:mt-[60px] laptopl:mt-[0px] tablet:overflow-hidden'>
                    <img className='self-end mt-4 md:w-full md:h-full object-contain leptop:ml-7' src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'/>
                </div>
            </div>
        </div>
    );
};
