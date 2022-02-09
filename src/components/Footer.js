import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import {BiGlobe} from  'react-icons/bi';
export const Footer = () => {
    return( 
        <div className='bg-white  md:mt-16'>
            <div className='laptopl:mx-[104px]  laptop:mx-[64px]  '>
                <div className='tablet:container  tablet:mx-auto   md:pt-[40px]'>
                    <div className='md:flex  flex-row  tablet:px-[24px] laptop:px-0 pt-4 px-4 md:pt-0 '>
                        <div className='tablet:basis-[162px] laptop:basis-[226px] xll:basis-[258px] laptopl:basis-[258px] tablet:mr-6  basis-[276.5px] ' >
                            <h3 className='mb-4  text-lg text-[#5d3ebc] sm:font-normal '>Getir'i indirin!</h3>
                            <a className='cursor-pointer'>
                                <img className='mb-4' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
                            </a>
                            <a className='cursor-pointer'>
                                <img className='mb-4' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
                            </a>
                            <a className='cursor-pointer'>
                                <img className='' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
                            </a>
                        </div>
                        <div className='tablet:basis-[162px] laptop:basis-[226px] xll:basis-[258px] laptopl:basis-[258px] tablet:mr-6 basis-[276.5px] mt-6 md:mt-0 flex  flex-col' >
                            <div>
                                <h3 className='mb-4  text-lg text-[#5d3ebc] sm:font-normal '>Getir'i keşfedin</h3>
                            </div>
                            
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Hakkımızda</a>
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kariyer</a>
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Teknoloji Kariyerleri</a>
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>İletişim</a>
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>COVID-19 Duyuru</a>
                                <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Sosyal Sorumluluk Projeleri</a>
                            
                        </div>
                        <div className='tablet:basis-[162px] laptop:basis-[226px] xll:basis-[258px] laptopl:basis-[258px] tablet:mr-6  basis-[276.5px] flex  flex-col' >
                            <h3 className='mb-4 font-normal text-lg text-[#5d3ebc] '>Yardıma mı ihtiyacınız var?</h3>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Sıkça Sorulan Sorular</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kişisel Verilerin Korunması</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Gizlilik Politikası</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kullanım Koşulları</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Çerez Politikası</a>
                        </div>
                        <div className='tablet:basis-[162px] laptop:basis-[226px] xll:basis-[258px] laptopl:basis-[258px]  xll:mr-6 laptop:mr-0 basis-[276.5px]  flex  flex-col' >
                            <h3 className='mb-4 font-normal text-lg text-[#5d3ebc] '>İş Ortağımız Olun</h3>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Bayimiz Olun</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Deponuzu Kiralayın</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>GetirYemek Restoranı Olun</a>
                            <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>GetirÇarşı İşletmesi Olun</a>
                        </div>
                        <div className='hidden  xl:flex justify-end basis-[104px] '>
                            <a className='  w-[72px ] h-[114px] p-4  rounded-lg footer-shadow cursor-pointer'>
                            <img className='w-[72px ] h-[84px]' src='https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className=' h-[165px] md:h-20 text-[13px] tablet:p-6 laptop:p-0 p-4  md:flex grid justify-center md:justify-between items-center md:bg-white bg-[#F5F5F5] border-t border-solid border-[#f3f0fe]'>
                        <div className='md:flex justify-center items-center m:text-center l:text-center s:text-center'>
                            <span className='md:mr-8  font-normal text[#525252]'>© 2022 Getir</span>
                            <div className='md:mt-0 md:mb-0  mt-1 mb-2'>
                                <ul className='md:list-disc text-[#5d3ebc]'>
                                    <li>
                                        <a className='cursor-pointer sm:font-normal '>
                                            Bilgi Toplumu Hizmetleri
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='md:flex grid items-center justify-center   text-[#697488]'>
                            <div className='flex items-center mb-2 md:mb-0  '>
                                <a className=' flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                                    <FaFacebook className='w-6 h-6'/>
                                </a>
                                <a className=' ml-[10px] flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                                    <FaTwitter className='w-6 h-6'/>
                                </a>
                                <a className='ml-[10px] flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                                    <FaInstagram className='w-6 h-6'/>
                                </a>
                            </div>
                            <a className='md:ml-[10px] h-[30px] s:font-normal rounded-lg flex md:h-[32px] md:w-[46px] lg:h-[32px] lg:w-[112px] items-center justify-center bg-white md:bg-none s:border-[#dbdbff] m:border-[#dbdbff] l:border-[#dbdbff] border-[1px] border-solid border-[#f3f0fe] transition-all cursor-pointer md:hover:bg-[#f3f0fe] hover:text-[#5d3ebc]'>
                                <div className='flex items-center'>
                                    <BiGlobe className='w-5 h-5 mr-2'/>
                                    <span className=' md:hidden lg:block text-[13px]'>Türkçe (TR)</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
