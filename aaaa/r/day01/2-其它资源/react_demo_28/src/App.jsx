import React from 'react'

import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Counter from './components/Counter'
import Style from './components/Style'
import IFAndFor from './components/IFAndFor'
import CheckBoxAndRadio from './components/CheckBoxAndRadio'
import RefAndDom from './components/RefAndDom'

// import Book from './components/book/Book'

import Basic from './components/router/Basic'

import Nested from './components/router/Nested'

import Parent from './components/brother/Parent'

// import Index from './components/redux/Index'
import Index from './components/react-redux/Index'

import Chat from './components/chat/Chat'

import { hot } from 'react-hot-loader/root'

import Book from './components/book_networking/Book'

import Douban from './components/proxy/Douban'

class App extends React.Component{

    getChildValue = data => {
        console.log('父组件 ',data)
    }

    //生命周期函数
    render(){
        // 渲染视图用的是 jsx 语法
        return (
            <div>
                 {/* 使用组件 */}
                {/* <Component1 name="张三" age={18}/> */}
                {/* <Component2 name="李四" age={30}/> */}
                {/* <Counter callback={this.getChildValue} initCount={10}/> */}
                {/* <Style /> */}
                {/* <IFAndFor /> */}
                {/* <CheckBoxAndRadio /> */}
                {/* <RefAndDom /> */}
                {/* <Book /> */}
                {/* <Basic /> */}
                {/* <Nested /> */}
                {/* <Parent /> */}
                <Index/>
                {/* <Chat /> */}
                {/* <Book /> */}
                {/* <Douban /> */}
            </div>
        )
    }
}

export default hot(App)