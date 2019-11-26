import React,{Component} from 'react'

// 导入Login等子组件
import Login from './login/Login'
import Main from './login/Main'
import LifeCycle from './login/LifeCycle'

export default class IFAndFor extends Component {
    constructor(){
        super()

        this.state = {
            isLogin:false,
            persons:[
                {id:1,name:'谢逊',skill:'七伤拳'},
                {id:2,name:'张无忌',skill:'乾坤大挪移'},
                {id:3,name:'周芷若',skill:'九阴白骨爪'},
                {id:4,name:'杨过',skill:'玉女心经'}
            ],
            value:111,
            isDead:false
        }
    }

    toggle = () => {
        this.setState({
            isLogin:!this.state.isLogin
        })
    }

    render(){
        // let component = null
        // if (this.state.isLogin) {
        //     component = <Main />
        // } else {
        //     component = <Login />
        // }
        return <div id="ifAndFor">
            {/* 条件渲染 */}
            {/* 如果在JSX中要写 if,for循环这种逻辑代码 */}
            {/* {
                this.state.isLogin ? <div>主页面</div> : <div>登录...</div>
            } */}
            
            {/* {
                this.state.isLogin ?  <Main/> : <Login/> 
            } */}

            {/* {
                component
            } */}
            
            {this.state.isLogin && <Main/>}
            {!this.state.isLogin && <Login/>}
            <br/>
            {/* <button onClick={this.toggle}>登录/登出</button>
            <br/>
            <ul>
                {this.state.persons.map(item=>{
                    return <li key={item.id}>{item.name}---{item.skill}</li>
                })}
            </ul>
            <br/>
            */}
            {
                !this.state.isDead && <LifeCycle data={this.state.value}/>
            }<br/>
            <button onClick={()=>{this.setState({value:222})}}>改变value的值</button>
            <button onClick={()=>{this.setState({isDead:true})}}>让子组件销毁掉</button> 
        </div>
    }
}