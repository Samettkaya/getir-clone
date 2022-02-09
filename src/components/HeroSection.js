import React, { useState } from 'react';
import Slider from "react-slick";
import getirmainpage1 from "../img/getirmainpage1.jpg"
import getirmainpage2 from "../img/getirmainpage2.jpg"
import getirmainpage3 from "../img/getirmainpage3.jpg"
import getirmainpage4 from "../img/getirmainpage4.jpg"
import bimutluluk from "../img/bimutluluk.svg"
import ReactFlagsSelect from 'react-flags-select';
import {useWindowWidth} from '@react-hook/window-size'




export const HeroSection = () => {

    const [selected, setSelected] = useState('TR');
    const windowWidth = useWindowWidth()
    const phones={
        US:'+1',
        DE:'+5',
        TR:'+90'
         

    }

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    }

    return (
        <div className='relative justify-center sm:h-[200px]  pt-6 md:pt-0 md:h-[500px] before:bg-gradient-to-r md:before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h:full before:z-10'>
           {windowWidth>=768 &&  <Slider {...settings} className="before:z-20">
                <div >
                    <img className='w-full  h-[500px] object-cover' src={getirmainpage1}/>
                </div>
                <div >
                    <img className='w-full  h-[500px] object-cover' src={getirmainpage2}/>
                </div>
                <div >
                    <img className='w-full h-[500px] object-cover' src={getirmainpage3}/>
                </div>
                <div >
                    <img className='w-full h-[500px] object-cover' src={getirmainpage4}/>
                </div>
            </Slider>}
            <div className='w-full md:container md:px-8 flex justify-between items-center relative md:absolute  top-0 left:0  md:left-1/2 translate-x-0 md:-translate-x-1/2 md:h-[500px] z-20'>
                <div className='hidden md:block'>
                    <img  src={bimutluluk} />
                    <h1 className='text-white font-semibold text-3xl w-[300px] mt-10'>Dakikalar içinde kapınızda</h1>
                </div>
                <div className=' w-full s:h-[157px] s:border-t-[1] s:border-solid s:border-[#f3f0fe] md:w-[400px]     '>
                    <div className=' w-full s:px-4 m:px-4 l:px-4 md:py-6 h-[157px] md:h-52 sm:bg-[#FAFAFA] rounded-lg '>
                        <h5 className='text-[#5d3ebc] mb-[15px] text-center  font-semibold text-base'>
                            Giriş yap  veya kayıt ol
                        </h5>
                        <div className='flex  justify-between mb-2'>
                            <div className=''>
                                <ReactFlagsSelect 
                                    countries={Object.keys(phones)}
                                    customLabels={phones}
            
                                    onSelect={code => setSelected(code)}
                                    selected={selected}
                                    className="flag-select"
                                />
                            </div>
                            <div className='relative group cursor-pointer w-full block l:ml-[10px] m:ml-[10px] s:ml-[10px]'>
                                <input required className='  cursor-pointer text-sm font-sans group-hover:border-[#5d3ebc] px-[14px] pt-[10px] text-[#191919] border-2 rounded-[4px] input peer h-[56px] w-full outline-none   ' type="tel"/>
                                <label className=' text-[14px] text-[#838287] font-sans tracking-[0.15px]  absolute top-0 flex items-center left-[14px] h-full transition-all peer-focus:h-6 peer-focus:text-[#5d3ebc] peer-focus:text-xs peer-valid:h-6 peer-valid:text-[#5d3ebc] peer-valid:text-xs'>Telefon Numarası</label>
                            </div>
                        </div>
                        <button className='shadow-lg shadow-[#69748826]  flex justify-center  w-full py-[14px] px-4 mt-3 text-sm font-semibold rounded-lg text-[#5d3ebc] bg-[#ffd300] hover:text-[#ffd300] hover:bg-[#5d3ebc] transition-colors   ease-in'>Telefon numarası ile devam et</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

