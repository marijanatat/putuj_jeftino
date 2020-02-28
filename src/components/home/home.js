import React, { Component } from 'react';
import Slider from '../offers/slider.js'
import Video from '../videos/video.js'

const Home =()=>
    (
    <div>
        <Slider
                type="prvi"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
            />

            <Video
                type="card"
                title={true}
                loadmore={false}
                start={0}
                amount={3}
            />

    </div>
    )

export default Home;
