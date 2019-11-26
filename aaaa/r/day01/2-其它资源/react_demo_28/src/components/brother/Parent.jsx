import React from 'react'

import Brother1 from './Brother1'
import Brother2 from './Brother2'

export default class Parent extends React.Component{
    render(){
        return <div>
            <p>我是父组件</p>
            <hr/>
            <Brother1 /><br/>
            <Brother2 />
        </div>
    }
}