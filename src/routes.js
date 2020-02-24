import React, { Component } from 'react'
import Home from './components/home/home'
import {Route, Switch} from 'react-router-dom'
import Layout from './components/layout/layout'

export class Routes extends Component {
    render() {
        return (
           <Layout>
            <Switch>
                <Route path='/'exact component={Home}/>
                
            </Switch>
            </Layout>
        )
    }
}

export default Routes;
