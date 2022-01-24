import React, { useState } from 'react';
import Slider from "react-slick";
import getirmainpage1 from "../img/getirmainpage1.jpg"
import getirmainpage2 from "../img/getirmainpage2.jpg"
import getirmainpage3 from "../img/getirmainpage3.jpg"
import getirmainpage4 from "../img/getirmainpage4.jpg"
import bimutluluk from "../img/bimutluluk.svg"
import ReactFlagsSelect from 'react-flags-select';
export const HeroSection = () => {

    const [selected, setSelected] = useState('TR');

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
        <div className='relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h:full before:z-20'>
            <Slider {...settings}>
                <div >
                    <img className='w-full h[500px] object-cover' src={getirmainpage1}/>
                </div>
                <div >
                    <img className='w-full h[500px] object-cover' src={getirmainpage2}/>
                </div>
                <div >
                    <img className='w-full h[500px] object-cover' src={getirmainpage3}/>
                </div>
                <div >
                    <img className='w-full h[500px] object-cover' src={getirmainpage4}/>
                </div>
            </Slider>
            <div className='container px-5 flex justify-between items-center absolute  top-0 left-1/2 -translate-x-1/2 h-[500px] z-20'>
                <div>
                    <img  src={bimutluluk} />
                    <h1 className='text-white font-semibold text-3xl w-[350px] mt-10'>Dakikalar içinde kapınızda</h1>
                </div>
                <div className='w-[400px]   bg-[#fafafa] rounded-lg p-6 '>
                    <h5 className='text-[#5d3ebc] mb-[15px] text-center  font-semibold text-base'>
                        Giriş yap  veya kayıt ol
                    </h5>
                    <div className='flex justify-between mb-2'>
                        <div>
                            <ReactFlagsSelect 
                        countries={Object.keys(phones)}
                        customLabels={phones}
   
                        onSelect={code => setSelected(code)}
                        selected={selected}
                        className="flag-select"
                        />
                        </div>
                        <div className='relative group cursor-pointer  block'>
                            <input required className='  cursor-pointer text-sm font-sans group-hover:border-[#5d3ebc] px-[14px] pt-[10px] text-[#191919] border-2 rounded-[4px] input peer h-[56px] w-[229px]  outline-none   ' type="tel"/>
                            <span className=' text-[15px] text-[#838287] font-sans tracking-[0.15px]  absolute top-0 flex items-center left-[14px] h-full transition-all peer-focus:h-6 peer-focus:text-[#5d3ebc] peer-focus:text-xs peer-valid:h-6 peer-valid:text-[#5d3ebc] peer-valid:text-xs'>Telefon Numarası</span>
                        </div>
                    </div>
                    <button className='flex justify-center h-full w-full py-[14px] px-4 mt-3 text-sm font-semibold rounded-lg text-[#5d3ebc] bg-[#ffd300] hover:text-[#ffd300] hover:bg-[#5d3ebc] transition-colors   ease-in'>Telefon numarsı ile devam et</button>
                </div>
            </div>
        </div>
    );
}

