import React  from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const campaigns =[
    {
        id: 1,
        image: "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"
    },
    {
        id: 2,
        image: "https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg"
    },
    {
        id: 3,
        image: "https://cdn.getir.com/misc/5fb524d4c725f1530045cefc_banner_tr_1609343376255.jpeg"
    },
    {
        id: 4,
        image: "https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg"
    }
]

function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}


export const Campaigns = () => {
   

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows:true,
        nextArrow: <NextButton/>,
		prevArrow: <PrevButton />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows:false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows:false
              }
            }
          ]
      
    }

    return (
        <div>
            <div className="md:container overflow-hidden md:overflow-visible mx-auto s:h-[160px]  m:h-[187.5px] l:h-[212.5px] md:h-[260px] md:px-[32px] md:pt-[32px]"  >
              <h3 className="sm:hidden md:block font-semibold hidden  text-sm mb-2">Kampanyalar</h3>
              <Slider className="md:-mx-2 relative" {...settings}>
                {campaigns.map(campaign => (
                  <div key={campaign.id} className="md:px-2 outline-none">
                    <img src={campaign.image} className="w-full h-[200px] s:h-[160px] m:h-[187.5px] l:h-[212.5px]   md:h-[200px] md:rounded-lg " />
                  </div>
                ))}
              </Slider>
            </div>
        </div>
    );
};
