import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import {BiGlobe} from  'react-icons/bi';
export const Footer = () => {
    return( 
        <div className='bg-white mt-16'>
            <div className='container  mx-auto px-[35px] pt-[40px]'>
                <div className='flex flex-row'>
                    <div className='basis-[276.5px] ' >
                        <h3 className='mb-4  text-lg text-[#5d3ebc] '>Getir'i indirin!</h3>
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
                    <div className='basis-[276.5px]  flex  flex-col' >
                        <h3 className='mb-4  text-lg text-[#5d3ebc] '>Getir'i keşfedin</h3>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Hakkımızda</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kariyer</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Teknoloji Kariyerleri</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>İletişim</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>COVID-19 Duyuru</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Sosyal Sorumluluk Projeleri</a>
                    </div>
                    <div className='basis-[276.5px] flex  flex-col' >
                        <h3 className='mb-4 font-normal text-lg text-[#5d3ebc] '>Yardıma mı ihtiyacınız var?</h3>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Sıkça Sorulan Sorular</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kişisel Verilerin Korunması</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Gizlilik Politikası</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Kullanım Koşulları</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Çerez Politikası</a>
                    </div>
                    <div className='basis-[276.5px]  flex  flex-col' >
                        <h3 className='mb-4 font-normal text-lg text-[#5d3ebc] '>İş Ortağımız Olun</h3>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Bayimiz Olun</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>Deponuzu Kiralayın</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>GetirYemek Restoranı Olun</a>
                        <a className='text-[#191919] text-sm  pb-4 cursor-pointer'>GetirÇarşı İşletmesi Olun</a>
                    </div>
                    <div className='flex justify-end basis-[104px] '>
                        <a className='  w-[72px ] h-[114px] p-4  rounded-lg footer-shadow cursor-pointer'>
                        <img className='w-[72px ] h-[84px]' src='https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png'/>
                        </a>
                    </div>
                </div>
                <div className='h-20 text-[13px] py-6 flex justify-between items-center border-t border-solid border-[#f3f0fe]'>
                    <div className='flex'>
                        <span className='mr-8  font-normal text[#525252]'>© 2022 Getir</span>
                        <div>
                            <ul className='list-disc text-[#5d3ebc]'>
                                <li>
                                    <a className='cursor-pointer  '>
                                        Bilgi Toplumu Hizmetleri
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center  text-[#697488]'>
                        <a className=' flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                            <FaFacebook className='w-5 h-5'/>
                        </a>
                        <a className=' ml-[10px] flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                            <FaTwitter className='w-5 h-5'/>
                        </a>
                        <a className='ml-[10px] flex items-center justify-center w-8 h-8 rounded-lg transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#7849f7]'>
                            <FaInstagram className='w-5 h-5'/>
                        </a>
                        <a className='ml-[10px] rounded-lg flex h-[32px] w-[112px] items-center justify-center  border-[1px] border-solid border-[#f3f0fe] transition-all cursor-pointer hover:bg-[#f3f0fe] hover:text-[#5d3ebc]'>
                            <div className='flex items-center'>
                                <BiGlobe className='w-4 h-4 mr-2'/>
                                <span className='text-[13px]'>Türkçe (TR)</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
