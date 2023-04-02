import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation,Pagination, Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const Carousel = () =>{
    return(

        
        
        <Swiper 
            modules={[Navigation,Pagination,Autoplay]}
            // autoplay={{delay:2000}}
            navigation= {true}
            loop={true}
            pagination={{clickable:true}}
            // slidesPerView= "2"
            direction={'horizontal'}
            reverseDirection={true}

            
            className="swiper-container"
            // style={{ position:"absolute",width:"100%", height:"73%",}}
        >

            
            <SwiperSlide className="slide-item">
             <img style={{width:"100%", height:"78%",}} src='https://fdscol.vtexassets.com/assets/vtex.file-manager-graphql/images/83bc9095-01bd-4cc8-a2b1-20e23e7319dc___4deea88c0b443fb72152de90a8a98439.jpg' alt="Chaquetas"></img>
            </SwiperSlide>

            <SwiperSlide className="slide-item">
             <img style={{width:"100%", height:"78%",}} src='https://fdscol.vtexassets.com/assets/vtex.file-manager-graphql/images/58599fe1-6090-4b8a-bdb5-3608c78bd109___eb1a3ed13b72c5cd0d7e93f43eb077e1.jpg' alt="Sweaters"></img>
            </SwiperSlide>
            
            
   
            
        </Swiper>
     
    
  );
};

    

export default Carousel;