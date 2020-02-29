import React, { Component } from 'react'
import './video.css'
import axios from 'axios'
import {URL} from '../../helper'
import Button from '../buttons/button'
import {Link} from 'react-router-dom'

export class Video extends Component {

    state={
        videos:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

   
request=(start, end)=>{
  axios(`${URL}/cities?_start=${start}&_end=${end}`)
  .then(response=>{
      this.setState({
          videos:[...response.data],
          start,
          end
      })
  })
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

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
}



   renderButton=()=>{
       return this.props.loadmore?
   <Button type='loadmore' cta='Load more video' loadMore={()=>this.loadMore()}></Button>
   
   
   : 
       <Button type='linkTo' cta='Load more videos' linkTo='/videos'></Button>
   }
  
   renderVideo = () => {
    return this.state.videos.map( (item,i) => {
        
        return <Link to={`/cities/${item.id}`} key={i}>
            <div className='wrapper'>
                <div className='left'
                     style={{
                         background:`url(/images/offers/${item.image})`,
                        
                     }} 
                >
                     
                      {/* <div></div>  */}
                      
                    </div>
                    </div>
                    
                    
                     
               

                <div className='right'>
                <h2>{item.title}</h2>
                  {/* {item.url} */}
                  <div className='video'>
                   {/* <iframe 
                     title="video player"
                     width="100%"
                     height="300px"
                     src={`https://www.youtube.com/embed/${item.url}`}
                   
                   ></iframe> */}
                   <iframe width="560" height="315" 
                   src={`https://www.youtube.com/embed/${item.url}`}
                   frameborder="0" allow="accelerometer" autoplay
                   encrypted-media gyroscope picture-in-picture 
                   allowfullscreen>
                   </iframe>
                   
                    </div>
                </div>
                
            
        </Link>
    }   
    )}
    // let template = null;

    // switch(this.props.type){
    //     case('card'):
    //         template = 
    //         <VideosListTemplate data={this.state.videos} />
    //         break;
    //     default:
    //         template = null
    // }
    // return template;
    



    render() {
        const video=this.state.videos;
        //console.log(this.state.videos)
        return (
            <div className='video1'>
                {this.renderTitle()}
                {this.renderVideo()}
                {this.renderButton()}

                
            </div>
        )
    }
}

export default Video
