import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplates from './slider_templates'

export class Slider extends Component {
    state={
        offers:[]
    }
    componentDidMount(){
       // _start=0 &_end=2
        axios.get( `http://localhost:3004/offers?_start=${this.props.start}&_end=${this.props.amount}`)
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
                <SliderTemplates data={this.state.offers} type={this.props.type} setting={this.props.setting}/>
            </div>
        )
    }
}

export default Slider
