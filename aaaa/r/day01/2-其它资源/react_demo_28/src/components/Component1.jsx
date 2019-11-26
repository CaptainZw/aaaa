import React from "react";

export default class Component1 extends React.Component {
  // class properties
  hobby = "乒乓球";
  constructor() {
    super();

    // 定义自己的数据
    this.state = {
      sex: "男",
      address: "广东深圳"
    };

    // 早早绑定
    // this.click = this.click.bind(this)
    this.click = this.click.bind(this, "湖南益阳");
  }

  click(address) {
    console.log("11111111111");
    console.log(this);

    this.setState({
      // 数据模型发生了改变，
      // address:'东莞'
      address
    });

    // 如果你的数据需要渲染到视图上，通过 this.setState
    // 如果不需要渲染到视图上，使用 this.state.xxx
  }

  /** 
    click2 = () => {
        console.log("222222222")
        // console.log(this)
        this.setState({
            sex:'女',
            address:'广州'
        })   
    }
    */
  click2 = (e,sex,address) => {
    // console.log("222222222");
    console.log(e)
    // console.log(this) 
    this.setState({
      sex,
      address
    });
  };

  // 类组件中必须写render函数
  render() {
    // console.log(typeof this.props.age,this.props.age)
    // this.props.age ++
    return (
      <div>
        我是类组件
        <p>
          {this.props.name}---{this.props.age}
        </p>
        <p>
          {this.state.sex}---{this.state.address}
        </p>
        {/* 绑定this方式1 */}
        {/* <button onClick={this.click.bind(this)}>更改值</button> */}
        {/* <button onClick={this.click.bind(this,'湖南岳阳')}>更改值</button> */}
        {/* 绑定this的方式2，在构造器中早早的绑定好 */}
        {/* <button onClick={this.click}>更改值</button> */}
        {/* 绑定this的方式3，让我们的函数是一个箭头函数 */}
        {/* 不用传参 */}
        {/* <button onClick={this.click2}>更改值</button> */}
        {/* Vue传参 @click="click2($event)" */}
        <button onClick={(e)=>{this.click2(e,'女','惠州')}}>更改值</button>
      </div>
    );
  }
}
