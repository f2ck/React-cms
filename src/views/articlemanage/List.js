import React, { Component } from 'react'

export default class List extends Component {
    state = {
        datalist:["111","222","3333"]
    }
    render() {
        return (
            <div>
                {this.state.datalist.map(item=>
                    <li key={item} onClick={()=>this.handleClick(item)}>{item}</li>    
                )}
            </div>
        )
    }

    handleClick = (id)=>{
        // console.log(this.props) // 外部父组件 Route提供的,history 跳转页面的方法
        //编程式导航
        this.props.history.push(`/article-manage/preview/${id}`)
    
    }
}
