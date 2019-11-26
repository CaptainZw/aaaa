import React,{Component} from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super()

        console.log("----state---")
        
        // 给模型设置初始值
        this.state = {
            name:'',
            age:0
        }
    }

    componentWillMount(){
        // 发送网络请求
        console.log('---componentWillMount---')

        setTimeout(() => {
            this.setState({
                name:'张三',
                age:30
            })
        }, 3000);
    }

    componentDidMount(){
        // 初次渲染完毕，可以操作dom
        console.log('---componentDidMount---')
        // console.log(document.getElementById('life'))
    }

    componentWillReceiveProps(props){
        // 比如父组件给我传递了新的id，拿着id发送网络请求
        console.log(props)
    }

    shouldComponentUpdate(){
        // 如果请求回来的数据没有发生变化
        console.log("11111111")
        return true
        // if (变了) return true else { return false}
    }


    componentWillUpdate(){
        // 再次渲染之前，可以做点其它的事情
        console.log("--componentWillUpdate--")
    }

    // 渲染数据
    render(){
        // 千万不要在这里更改 state的值
        console.log("----render----")
        return <div id="life">
            测试生命周期函数---{this.props.data}<br/>
            {this.state.name} ---{this.state.age}
        </div>
    }

    componentDidUpdate(){
        // 拿到再次渲染之后的dom 
        console.log("--componentWillUpdate--")
        // console.log(document.getElementById('life'))
    }

    componentWillUnmount(){
        // 清理工作，比如清楚定时器
        console.log("----componentWillUnmount---")
    }
}