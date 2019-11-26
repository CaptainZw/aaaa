import React,{Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()

        this.state = {
            username:'admin',
            password:''
        }
    }

    login = () => {
        console.log('获取到用户名和密码的值')

        // 非受控
        // const username = document.getElementById('username').value
        // const password = document.getElementById('password').value

        // console.log(username,password)

        console.log(this.state.username,this.state.password)
    }

    change = (e) => {
        console.log(e.target)
        this.setState({
            // username:e.target.value
            // 动态属性名
            [e.target.name]:e.target.value
        })
    }

    // changePassword = (e) => {
    //     console.log(e.target)
    //     this.setState({
    //         password:e.target.value
    //     })
    // }

    render(){
        const {username,password} = this.state
        return <div>
            {/* 非受控 */}
            {/* 用户名：<input id="username" type="text" /><br/>
            密码：<input id="password" type="password" /><br/> */}
            {/* 受控 分开写 */}
            {/* 用户名：<input name="username" value={username} onChange={this.change} type="text" /><br/>
            密码：<input name="password"  value={password} onChange={this.changePassword} type="password" /><br/> */}
             用户名：<input name="username" value={username} onChange={this.change} type="text" /><br/>
            密码：<input name="password"  value={password} onChange={this.change} type="password" /><br/>
            <button onClick={this.login}>登录</button>
        </div>
    }
}