import React, { Component } from "react";

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

import './Index.css'

// 导入Element的主题
import 'element-theme-default';

// 导入子组件
import GoodsList from './GoodsList'
import Cart from './Cart'

import { connect } from 'react-redux'

class Index extends Component {
  componentWillMount(){

    // 监听浏览器的刷新及关闭
    // 监听window的onbeforeunload
    window.onbeforeunload = () => {
      localStorage.setItem('MYCART',JSON.stringify(this.props.goodsList))
    }
  }

  render() {
    return (
      <Router>
        <h2 className="title">
          黑马买买买-商城
          <p>
            <Link
              to="/goodslist"
              className="router-link-exact-active router-link-active"
            >
              商品列表
            </Link>
            <Link to="/cart">
              购物车{this.props.totalCount > 0 && <span>（{this.props.totalCount}）</span>}
            </Link>
          </p>
        </h2>
        <div>
            <Switch>
                <Route path="/goodslist" component={GoodsList}/>
                <Route path="/cart" component={Cart}/>
                <Redirect exact from="/" to="/goodslist"/>
            </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * 参数1，负责获取值 store.getState()
 * 参数2，负责操作值 store.dispatch({type:'xxx',其它的值})
 * 
 */
 // 把仓库中的值，映射到组件的props属性上
 // state === store.getState()

const mapStateToProps  = state => {
  // 获取最新的总数
  const calcTotalCount = () => {
    let totalCount = 0
    state.forEach(item => {
      totalCount += item.num
    })

    return totalCount
  }
  return {
    goodsList:state,
    totalCount:calcTotalCount()
  }
}

export default connect(mapStateToProps,null)(Index)
