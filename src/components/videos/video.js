import React, { Component } from 'react'
import './video.css'
import axios from 'axios'
import {URL} from '../../helper'
import Button from '../buttons/button'

export class Video extends Component {

    state={
        videos:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

   







   renderTitle=()=>{
       return this.props.title?
   <h3><strong>Cities Videos</strong></h3>
       :
       null

   }

  // loadMore=()=>{
    //   return 
       
  // }

   renderButton=()=>{
       return this.props.loadmore?
   <Button type='loadmore' cta='Load more video' /*loadMore={()=>loadMore()}*/></Button>
       : 
       <Button type='linkTo' cta='Load more videos' linkTo='/videos'></Button>
   }










    render() {
        return (
            <div className='video1'>
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    }
}

export default Video
