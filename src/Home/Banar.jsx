import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from '../../public/./ass_1.png'
import banner2 from '../../public/ass_2.png'
import banner3 from '../../public/garden.png'
import banner4 from '../../public/ass_3.png'


  const Banar = () => {
    return (
  <Carousel
  className="parent hover-trigger"
  autoPlay={true}
  infiniteLoop={true}
  interval={2000} // 2 seconds between slides
  showThumbs={false}
  showStatus={false}
>
               
           <div className="hover-hide">
                    <img className='h-100 w-full' src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className='h-100 w-full' src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className='h-100 w-full' src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className='h-100 w-full' src={banner4} />
                    <p className="legend">Legend 4</p>
                </div>
              
            </Carousel>
    );
};

export default Banar;