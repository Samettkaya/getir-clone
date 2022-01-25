import React  from 'react';
import Slider from 'react-slick';


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


export const Campaigns = () => {
   

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
      
    }

    return (
        <div>
           <div className="sm:container overflow-hidden md:overflow-visible mx-auto h-[264px] px-[35px] pt-[35px]"  >
				<h3 className="font-semibold hidden sm:block text-sm mb-3">Kampanyalar</h3>
				<Slider className="-mx-2 relative" {...settings}>
					{campaigns.map(campaign => (
						<div key={campaign.id} className="px-2 outline-none">
							<img src={campaign.image} className="w-[400px] sm:rounded-lg " />
						</div>
					))}
				</Slider>
			</div>
        </div>
    );
};
