import React from 'react'

export default class Douban extends React.Component{
    login = () => {
        /** 
        fetch('http://api.douban.com/v2/movie/in_theaters').then(response=>response.json()).then(data=>{
            console.log(data)
        })
        */

        // 开发阶段，可以使用webpack自带的代理服务器
        fetch('http://localhost:8080/v2/movie/in_theaters').then(response=>response.json()).then(data=>{
            console.log(data)
        })

        // 生产阶段，使用我们自己写的代理服务器
        // fetch('http://127.0.0.1:9000/douban/in_theaters').then(response=>response.json()).then(data=>{
        //     console.log(data)
        // })
    }

    render(){
        return <div>
            <button onClick={this.login}>获取豆瓣数据</button>
        </div>
    }
}