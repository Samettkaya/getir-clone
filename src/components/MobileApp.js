import React from 'react';

export const MobileApp = () => {
    return (
        <div className='container mx-auto px-[35px]'>
            <div className='my-6 rounded-lg bg-[#5d3ebc] bg-mobile-app min-h-[312px] flex items-center justify-between'>
                <div className='pl-12 text-white'>
                    <h2 className='text-[26px] tracking-[-1px] font-bold mb-3 '>Getir'i İndirin!</h2>
                    <span className=' font-semibold text-base '>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</span>
                    <div className='flex items-center justify-center mt-8 gap-x-1.5'>
                        <a>
                            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
                        </a>
                        <a>
                            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
                        </a>
                        <a>
                            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
                        </a>                       
                    </div>
                </div>
                <div>
                    <img className='self-end mt-4' src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'/>
                </div>
            </div>
        </div>
    );
};
