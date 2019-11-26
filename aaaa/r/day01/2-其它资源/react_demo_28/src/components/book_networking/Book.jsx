import React, { Component } from "react";

import "./Book.css";

export default class Book extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      bookName: "",
      isEdit: false, //是否是修改
      editId: null //要修改的id
    };
  }

  _getNewId = () => {
    const ids = this.state.books.map(item => item.id); //[1,2,3]
    const maxId = Math.max(...ids);
    // const maxId = Math.max.apply(null, ids);
    return maxId + 1;
  };

  addOrUpdate = () => {
    if (!this.state.isEdit) {
      // 新增
      console.log(this.state.bookName);
      // 发送请求给后台
      fetch("http://localhost:8080/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=" + this.state.bookName
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            bookName: ""
          });

          this.getBooks();
        });
    } else {
      //修改
      fetch(`http://localhost:8080/book/${this.state.editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=" + this.state.bookName
      }).then(response=>response.json()).then(data=>{
          console.log(data)
          this.setState({
            bookName: ""
          });

          // 重置回去
          this.state.isEdit = false;
          this.state.editId = null;

          // 重新查询一下
          this.getBooks()
      })
      
    }
  };

  deleteBook = id => {
    fetch(`http://localhost:8080/book/${id}`,{
        method:'DELETE'
    }).then(response=>response.json())
    .then(data=>{
        console.log(data)

        this.getBooks()
    })
  };

  editBook = id => {
    // console.log(id)
    const editBook = this.state.books.find(item => item.id === id);

    this.setState({
      bookName: editBook.name
    });

    // 记录一下
    this.state.isEdit = true;
    this.state.editId = id;
  };

  componentWillMount() {
    //fetch 替代XHR的
    this.getBooks();
  }

  getBooks = () => {
    fetch("http://localhost:8080/book")
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data
        });
      });
  };

  render() {
    const { books, bookName } = this.state;
    return (
      <div>
        书名:
        <input
          onChange={e => {
            this.setState({ bookName: e.target.value });
          }}
          value={bookName}
          type="text"
        />
        &nbsp;<button onClick={this.addOrUpdate}>新增/修改</button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>书名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <a
                      onClick={() => {
                        this.editBook(item.id);
                      }}
                      href="javascript:void(0)"
                    >
                      编辑
                    </a>
                    &nbsp;&nbsp;
                    <a
                      onClick={() => {
                        this.deleteBook(item.id);
                      }}
                      href="javascript:void(0)"
                    >
                      删除
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
