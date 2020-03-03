import React, { Component } from "react";
import "./video.css";
import axios from "axios";
import { URL } from "../../helper";
import Button from "../buttons/button";
import { Link } from "react-router-dom";

export class Video extends Component {
    constructor(props) {
        super(props);
  this.state = {
    items: [],
    visible: 1,
    error: false

    // start:this.props.start,
    // end:this.props.start+this.props.amount,
    // amount:this.props.amount
  };
  this.loadMore = this.loadMore.bind(this);
}

  componentWillMount() {
    fetch(`${URL}/cities`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
    //this.request(this.state.start, this.state.end)
  }

//   request = (start, end) => {
//     axios(`${URL}/cities?_start=${start}&_end=${end}`).then(response => {
//       this.setState({
//         videos: [...response.data],
//         start,
//         end
//       });
//     });
//   };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>Cities Videos</strong>
      </h3>
    ) : null;
  };

  //   loadMore = () => {
  //     let end = this.state.end + this.state.amount;
  //     this.request(this.state.end, end);
  // }

  loadMore() {
    // event.preventDefault();
     // this.setState(prev => {
     //   return { visible: prev.visible + 2 };
       this.setState((prev) => {
         return { visible: prev.visible + 2 };
     });
   }


  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        cta="Load more video"
        loadMore={this.loadMore}
      ></Button>
    ) : (
      <Button type="linkTo" cta="Load more videos" linkTo="/videos"></Button>
    );
  };

//   renderVideo = () => {
//     return this.state.items.map((item, i) => {
//       return (
//         <Link to={`/cities/${item.id}`} key={i}>
//           <div className="wrapper">
//             <div
//               className="left"
//               style={{
//                 background: `url(/images/offers/${item.image})`
//               }}
//             >
//               {/* <div></div>  */}
//             </div>
//           </div>

//           <div className="right">
//             <h2>{item.title}</h2>
        
//             <div className="video">
            
//               <iframe
//                 width="560"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${item.url}`}
//                 frameborder="0"
//                 allow="accelerometer"
//                 autoplay
//                 encrypted-media
//                 gyroscope
//                 picture-in-picture
//                 allowfullscreen
//               ></iframe>
//             </div>
//           </div>
//         </Link>
//       );
//     });
//   };

  
  render() {
  
    return (
    //   <div className="video1">
    //     {this.renderTitle()}
    //     {this.renderVideo()}
    //     {this.renderButton()}
    //   </div>
   

    <div className="tiles" aria-live="polite">
      {this.state.items.slice(0, this.state.visible).map((item, index) => {
          return (
            <div className="tile fade-in" key={item.id}>
              {/* <span className="count">{index+1}</span> */}
              <h2>{item.title}</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.url}`}
                frameborder="0"
                allow="accelerometer"
                autoplay
                encrypted-media
                gyroscope
                picture-in-picture
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      
      {this.state.visible < this.state.items.length &&
      
        
         <button onClick={this.loadMore} type="loadmore" className="loadmore">Load more</button>
      }
      </div>
   
    );
  }
}

export default Video;
