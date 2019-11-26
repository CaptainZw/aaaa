import React from 'react'

export default class Chat extends React.Component{
    constructor(){
        super()

        this.state = {
            message:'',
            content:''
        }
    }

    ws = null

    connect = () => {
        // 打开一个 web socket
        this.ws = new WebSocket("ws://127.0.0.1:8081")

        // 监听服务器返回的结果
        this.ws.onmessage =  (evt) =>  
        { 
           var received_msg = evt.data
        //    console.log(received_msg)
            this.setState({
                message:received_msg
            })
        };
    }

    changeText = e => {
        this.setState({
            content:e.target.value
        })
    }

    send = () => {
        // console.log(this.state.content)

        // 发送给服务器
        this.ws.send(this.state.content)
    }

    render(){
        return <div>
            <button onClick={this.connect}>连接到服务器</button><br/><br/><br/>
            <div>
                <input value={this.state.content} onChange={this.changeText} placeholder="请输入聊天内容" type="text"/>&nbsp;&nbsp;<button onClick={this.send}>发送</button><br/><br/>
            </div>
            <div>
                服务器给我返回的数据是:{this.state.message}
            </div>
        </div>
    }
}