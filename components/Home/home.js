import React from 'react';
import NewsSlider from '../widgets/newsSlider/slider';
import NewsList from "../widgets/newsList/newslist";
import VideosList from "../widgets/videosList/videos";
const Home = () =>{
    return (
        <div>
            <NewsSlider 
              type = "featured"
              start = {5}
              anmount = {8}
              settings = {{
                  dots:false 
              }}
            />
            <NewsList
                type = 'card'
                loadmore = {true}
                start = {0} 
                anmount = {3}
            />
            <VideosList
                type = 'card'
                title = {true}
                loadmore = {false}
                start = {0}
                anmount = {3}
            />
        </div>
    )
}

export default Home; 