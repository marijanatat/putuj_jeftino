import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplates from './slider_templates'

export class Slider extends Component {
    state={
        offers:[]
    }
    componentDidMount(){
       // _start=0 &_end=2
        axios.get( `http://localhost:3004/offers`)
        .then(response=>{
           this.setState({
               offers:response.data
        })
    })
    }

    render() {
      // console.log(this.state.offe rs)
        return (
            <div>
                <SliderTemplates data={this.state.offers}/>
            </div>
        )
    }
}

export default Slider
