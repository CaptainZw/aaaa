import React from 'react'

import bus from './bus'

export default class Brother2 extends React.Component{
    constructor(){
        super()

        this.state = {
            person:null
        }
    }

    componentDidMount(){
        bus.on('myevent',data=>{
            // console.log(data)
            this.setState({
                person:data
            })
        })
    }

    render(){
        return <div>
            <p>子组件2</p>
            <div>展示子组件1给我传递过来的值:
                {this.state.person && <span>{this.state.person.name}---{this.state.person.age}</span>}
            </div>
        </div>
    }
}