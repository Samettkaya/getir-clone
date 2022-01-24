import React from 'react';
import getir from '../img/getir.svg'
import getirfood from '../img/getirfood.svg'
import getirmore from '../img/getirmore.svg'
import getirwater from '../img/getirwater.svg'
import getirlocals from '../img/getirlocals.svg'
import {BiGlobe} from  'react-icons/bi';
import {HiUser, HiUserAdd} from  'react-icons/hi';
function Header() {
    return (
            <div className='w-full bg-[#4C3398] h-[45px] flex  items-center '>
                <div className='container mx-auto px-[24px]'>
                    <div className='flex  items-center  justify-between'>
                        <div className='flex justify-start '>
                            <div className='flex  mt-[5px]'>
                                <div className='mr-[1px] cursor-pointer px-5 py-3 rounded-t-[6px] bg-[#5D3EBC]'>
                                        <a className=' '>
                                            <img className=' h-[16px] ' src={getir}/>
                                        </a>
                                </div>
                                <div className='mr-[1px] cursor-pointer  px-5 py-3 rounded-t-[6px] hover:bg-[#5D3EBC]'>
                                    <a className=' '>
                                        <figure className=' brightness-[5%] invert-[90%] '>
                                        <img className=' h-[16px]' src={getirfood}/>
                                        </figure>
                                    </a>
                                </div>
                                <div className='mr-[1px]  cursor-pointer px-5 py-3 rounded-t-[6px] hover:bg-[#5D3EBC]'>
                                    <a className=' '>
                                        <figure className=' brightness-[5%] invert-[90%] '>
                                            <img className=' h-[16px]' src={getirmore}/>
                                        </figure>
                                    </a>
                                </div>
                                <div className='mr-[1px] cursor-pointer  px-5 py-3 rounded-t-[6px] hover:bg-[#5D3EBC]'>
                                    <a className=' '>
                                        <figure className=' brightness-[5%] invert-[90%] '>
                                            <img className=' h-[16px]' src={getirwater}/>
                                        </figure>
                                    </a>
                                </div>
                                <div className='  cursor-pointer  px-5 py-3 rounded-t-[6px] hover:bg-[#5D3EBC]'>
                                    <a className=' '>
                                        <figure className=' brightness-[5%] invert-[90%] '>
                                            <img className=' h-[16px]' src={getirlocals}/>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex pr-5 text-sm text-[#dbdbff]'>
                            
                            <a className=' flex justify-center items-center  cursor-pointer py-[7px] pl-4 pr-3 font-normal'>
                                <BiGlobe className='mr-3 text-xl'/> Türkçe (TR)
                            </a>
                            <a className=' flex justify-center items-center  cursor-pointer py-[7px] pl-4 pr-3 font-semibold'>
                                <HiUser className='mr- text-xl font-semibold'/> Giriş yap
                            </a>
                            <a className=' flex justify-center items-center cursor-pointer py-[7px] pl-4 pr-3 font-semibold'>
                                <HiUserAdd className='mr-1 text-xl font-semibold'/> Kayıt Ol
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Header;
