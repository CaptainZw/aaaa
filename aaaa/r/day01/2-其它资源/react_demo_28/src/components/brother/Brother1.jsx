import React from 'react'

import bus from './bus'

export default class Brother1 extends React.Component{
    sendValueToBrother2 = () => {
        // 触发自定义事件，并且传递参数
        bus.emit('myevent',{
            name:'小明',
            age:30
        })
    }

    render(){
        return <div>
            <p>子组件1</p>
            <button onClick={this.sendValueToBrother2}>传值给子组件2</button>
        </div>
    }
}