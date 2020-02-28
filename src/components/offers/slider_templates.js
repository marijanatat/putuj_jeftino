import React from 'react';
import { Link } from 'react-router-dom'

import Slick from 'react-slick';
import  './slider.css'

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots:true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        ...props.settings
    }

     switch(props.type){
        case ('prvi'):
             template = props.data.map( (item,i) =>{
                return(
                     <div key={i}>
                         {i}
                         <div className='prvi_item'>
                             <div className='prvi_image'
                                style={{
                                     background:`url(../images/offers/${item.image})`
                                 }}></div>
                             <Link to={`/offers/${item.id}`}>
                                 <div className='prvi_caption'>
                                     {item.title}
                                </div>
                             </Link>
                        </div> 
                     </div>
                )
             })
             break;
       default:
            template = null;

 }


 //console.log(props)
    return(
        // <Slick {...settings} >
        //     {template}
        // </Slick>
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;