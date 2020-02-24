import React, { Component } from 'react'
import './layout.css'
import Header from '../header/header'
// import Footer from '../../components/Footer/footer';

export class Layout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showNavBar:false  
        }
    }
    toggleSideNav = (action) =>{
        this.setState({
            showNavBar:action
        })
    }

    render() {
        return (
            <div>
                <Header
                showNavBar={this.state.showNavBar}
                onOpenNav={()=>this.toggleSideNav(true)}
                onHideNav={()=>this.toggleSideNav(false)}
                />
                {this.props.children}
                {/* <Footer></Footer> */}
            </div>
        )
    }
}

export default Layout
