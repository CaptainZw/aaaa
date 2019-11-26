import React from 'react'

// 导入路由相关
import { HashRouter as Router, Route,Redirect,Switch } from "react-router-dom"

// 导入子组件
import Login from './Login'
import Layout from './Layout'
import NotFound from './NotFound'

export default class Nested extends React.Component{
    render(){
        return <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/layout" component={Layout}/>
                <Redirect exact from="/" to="/login"/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    }
}