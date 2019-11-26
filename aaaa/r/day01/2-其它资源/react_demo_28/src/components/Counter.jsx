import React,{Component} from 'react'

export default class Counter extends Component{
    constructor(props){
        super(props)
        
        // 自己内部拥有的数据
        this.state = {
            count:props.initCount
        }
    }

    add = () => {
        // React中规定，父组件传递过来的值，不能直接更改
        // this.props.initCount++
        

        // 如果count的值，不需要显示在视图上，下面这样改，没问题
        // this.state.count++
        // console.log(this.state.count)

        // 如果count的值，需要在视图中显示，只能通过 this.setState
        this.setState({
            count:this.state.count + 1
        },() => { // 如果你要等数据更新完毕之后再做其它事情，我们就在这个回调中写
            // console.log(`更改完毕之后的值 ${this.state.count}`)
            
            this.props.callback(this.state.count)
        })
    }

    render(){
        return <div>
            <p>我是计数组件</p>
            <p>父组件传递过来的值：{this.props.initCount}</p>
            <p>子组件传递过来的值：{this.state.count}</p>
            <button onClick={this.add}>+1</button>
        </div>
    }
}