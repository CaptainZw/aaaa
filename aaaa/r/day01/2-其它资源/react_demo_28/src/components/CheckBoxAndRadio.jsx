import React,{Component} from 'react'

export default class CheckBoxAndRadio extends Component {
    constructor(){
        super()

        this.state = {
            values:['apple','orange','watermelon','lemon'],// 全部的水果
            svalues:['apple','orange'], // 选中的水果
            sexs:['male','female'],
            sex:['female']
        }
    }

    change = e => {
        // console.log(e.target.value)
        if (this.state.svalues.includes(e.target.value)){ // 之前的里面有
            // 移除

            // ['apple','orange']
            const newArray = this.state.svalues.filter(item => item != e.target.value)
           
            this.setState({
                svalues:newArray
            })
        } else { // 之前没有，要添加
            const newArray = [...this.state.svalues,e.target.value]

            this.setState({
                svalues:newArray
            })
        }
    }

    changeSex = e => {
        // console.log(e.target.value)
        this.setState({
            sex:[e.target.value]
        })
    }

    render(){
        const {values,svalues,sexs,sex} = this.state
        return <div>
            <form>
                喜欢的水果:
                    {values.map((item,index)=>{
                        return <label key={index}>
                            <input type="checkbox" onChange={this.change} value={item} checked={svalues.includes(item)} />{item}&nbsp;
                        </label>
                    })}
                <br/>
                性别:
                    {
                        sexs.map((item,index) => {
                            return <label key={index}>
                                <input type="radio" onChange={this.changeSex} checked={sex.includes(item)} value={item}/>{item}&nbsp;&nbsp;
                            </label>
                        })
                    }
                <button>提交</button>
            </form>
        </div>
    }
}