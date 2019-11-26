import React from 'react'

const login = {
    height: '200px',
    width: '300px',
    margin:'100px auto',
    border: '1px solid rgba(92,92,92,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export default class Login extends React.Component{
    login = () => {
        // console.log("登录成功了...")
        // 通过编程式导航，跳转到layout组件
        // this.props.history.push('/layout')
        this.props.history.push({pathname:'/layout',state:{id:1001}})
    }

    render(){
        return <div>
             <div>
                用户名:<input type="text" /><br/>
            </div>
            <div>
                密码:<input type="password" /><br/>
            </div>
            {/* <Link to="/layout">登录</Link> */}
            <button onClick={this.login}>登录</button>
        </div>
    }
}