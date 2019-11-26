import React,{Component} from 'react'

import './Book.css'

export default class Book extends Component {
    constructor(){
        super()

        this.state = {
            books:[ 
                {id:1,name:'斗破苍穹'},
                {id:2,name:'水浒传'},
                {id:3,name:'十万个不为什么'}
            ],
            bookName:'',
            isEdit:false ,//是否是修改
            editId:null //要修改的id
        }
    }

    _getNewId = () => {
        const ids = this.state.books.map(item => item.id) //[1,2,3]
        const maxId = Math.max(...ids)
        // const maxId = Math.max.apply(null, ids);
        return maxId + 1;
    };

    addOrUpdate = () => {
        if (!this.state.isEdit){ // 新增
            const newArray = [...this.state.books,{id:this._getNewId(),name:this.state.bookName}]

            this.setState({
                books:newArray
            },() => {
                this.setState({
                    bookName:''
                })
            })
        } else { //修改
            // console.log(this.state.editId,this.state.bookName)
            const editBook = this.state.books.find(item => item.id === this.state.editId)
            editBook.name = this.state.bookName

            // console.log(editBook)
            this.setState({
                books:this.state.books
            },() => {
                this.setState({
                    bookName:''
                })
                
                // 重置回去
                this.state.isEdit = false
                this.state.editId = null
            })
        }
    }

    deleteBook = id => {
        // console.log(id)
        const newArray = this.state.books.filter(item => item.id != id)

        this.setState({
            books:newArray
        })
    }

    editBook = id => {
        // console.log(id)
        const editBook = this.state.books.find(item => item.id === id)

        this.setState({
            bookName:editBook.name
        })

        // 记录一下
        this.state.isEdit = true
        this.state.editId = id
    }

    render(){
        const {books,bookName} = this.state
        return <div>
            书名:<input onChange={(e)=>{this.setState({bookName:e.target.value})}} value={bookName} type="text"/>&nbsp;<button onClick={this.addOrUpdate}>新增/修改</button><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>书名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(item=>{
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <a onClick={()=>{this.editBook(item.id)}} href="javascript:void(0)">编辑</a>&nbsp;&nbsp;
                                    <a onClick={()=>{this.deleteBook(item.id)}} href="javascript:void(0)">删除</a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}