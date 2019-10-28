import React from 'react';
import Slick from 'react-slick';
import Styles from './slider.css';
import { Link } from 'react-router-dom';


const SliderTemplate = (props) => {
    console.log(props.data)
    let templates = null
    const settings = {
        dots : true,
        infinite : true,
        arrows : false,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
    }

    switch(props.type) {
        case ("featured") :
           templates = props.data.map((item , i) => {
               return (
                   <div key={i}>
                      <div className = {Styles.featured_items}>
                          <div className = {Styles.featured_image} 
                           style = {{
                            background:`url(../images/articles/${item.image})`
                        }}
                          >
                            <Link to={`/articles/${item.id}`}>
                                  <div>{item.title}</div>
                              </Link>                        
                          </div>
                     </div>
                   </div>
               )
           })
           break;
        default :
           templates = null

    }


    return (
        <Slick {...settings}>
            {templates}
        </Slick>
        )
}

export default SliderTemplate;