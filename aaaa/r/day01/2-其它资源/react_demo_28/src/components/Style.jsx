import React,{Component} from 'react'

// 导入外部的样式文件
import './Style.css'
import './Style.less'

const style1 = {
    color:'green',
    fontSize:'30px',
    fontWeight:900
}

export default class Style extends Component {
    style3 = {
        color:'hotpink',
        fontSize:'100px',
        fontWeight:900
    }

    render(){
        const style2 = {
            color:'purple',
            fontSize:'50px',
            fontWeight:900
        }
        return <div>
             <span style={{color:'red',fontSize:'20px'}}>Hello World</span>
                {/* 这是一个span */}
                <p style={style1}>111</p>
                <p style={style2}>222</p>
                <p style={this.style3}>333</p>
                <p id="test1">444</p>
                <p className="test2">555</p>
                <p className="test3">666</p>
        </div>
    }
}