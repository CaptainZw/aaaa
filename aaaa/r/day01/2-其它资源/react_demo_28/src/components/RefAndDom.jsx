import React,{Component} from 'react'

export default class RefAndDom extends Component {
    constructor(){
        super()

        this.state = {
            imgPath:null
        }

        this.usernNameRef = React.createRef()

        this.fileRef = React.createRef()
    }
    render(){
        return <div>
            {/* 用户名:<input id="usernameId" type="text"/> */}
            {/* 旧版的Ref使用 */}
            {/* 用户名:<input ref="usernameRef" type="text"/> */}
            {/* 新版的Ref使用 */}
            {/* 用户名:<input ref={this.usernNameRef} type="text"/> */}
            文件:<input ref={this.fileRef} type="file"/><br/><br/>
            <button onClick={this.upload}>文件上传</button><br/>
            {
                this.state.imgPath && <img style={{width:300,height:300}} src={this.state.imgPath}/>
            }
        </div>
    }

    upload = () => {
        const file = this.fileRef.current.files[0]
        if (file){
            // 创建xhr
            var xhr = new XMLHttpRequest()
            // 生成formData
            const formData = new FormData()
            // 添加文件的数据
            formData.append('file',file)
            // open
            xhr.open('post','http://127.0.0.1:8888/uploadFile')
            // 发送出去
            xhr.send(formData)

            xhr.onreadystatechange = () => {
                if (xhr.readyState===4 && xhr.status === 200){
                    var jsonStr = xhr.responseText

                    var obj = JSON.parse(jsonStr)
                    console.log(obj)
                    
                    // 实现图片预览
                    this.setState({
                        imgPath:obj.path
                    })
                }
            }
        }
    }

    componentDidMount(){
        // const username = document.getElementById('usernameId')
        // username.focus()

        // 旧版本
        // console.log(this.refs.usernameRef)
        // this.refs.usernameRef.focus()

        // 新版本
        // console.log(this.usernNameRef.current)
        // this.usernNameRef.current.focus()
    }
}