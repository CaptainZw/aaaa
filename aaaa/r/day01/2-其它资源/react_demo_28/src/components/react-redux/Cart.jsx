import React, { Component } from "react";

import { Table, Button, InputNumber } from "element-react";

import { connect } from "react-redux";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          label: "名称",
          prop: "name"
        },
        {
          label: "图片",
          render(data) {
            return <img style={{ width: 100, height: 100 }} src={data.url} />;
          }
        },
        {
          label: "数量",
          render: data => {
            return (
              <InputNumber
                value={data.num}
                onChange={val => {
                  this.props.changeNumber(data, val);
                }}
                size="small"
                defaultValue={data.num}
                min="1"
              />
            );
          }
        },
        {
          label: "单价",
          prop: "price"
        },
        {
          label: "总价",
          render(data) {
            return <span>{data.price * data.num}</span>;
          }
        },
        {
          label: "操作",
          render: data => {
            return (
              <span>
                <Button
                  onClick={() => {
                    this.props.deleteGoods(data.id);
                  }}
                  type="danger"
                >
                  删除
                </Button>
              </span>
            );
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Table
          style={{ width: "100%" }}
          columns={this.state.columns}
          data={this.props.goodsList}
        />
        <p style={{ marginLeft: 5 }}>总价:{this.props.totalPrice}</p>
        <br />
        <Button style={{ marginLeft: 5, width: 100 }} type="success">
          结算
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const calcTotalPrice = () => {
    let totalPrice = 0;
    state.forEach(item => {
      totalPrice += item.num * item.price;
    });

    return totalPrice;
  };

  return {
    // 这里面的属性名就是将来要挂在到props的属性名
    goodsList: state,
    totalPrice: calcTotalPrice()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNumber(goods, value) {
      dispatch({
        type: "UPDATE_GOODS",
        id: goods.id,
        num: value
      });
    },

    deleteGoods(id) {
      dispatch({
        type: "DELETE_GOODS",
        id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
