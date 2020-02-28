import React, { Component } from 'react'
import Home from './components/home/home'
import {Route, Switch} from 'react-router-dom'
import Layout from './components/layout/layout'
import Video from './components/videos/video'

export class Routes extends Component {
    render() {
        return (
           <Layout>
            <Switch>
                <Route path='/'exact component={Home}/>
                {/* <Route path="/videos/:id" exact component={VideoArticle}/> */}
                    <Route path="/videos" exact component={Video}/>
            </Switch>
            </Layout>
        )
    }
}

export default Routes;
