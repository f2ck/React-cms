import React, { Component } from 'react'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        权限列表
                    </li>
                    <li>角色权限</li>
                </ul>
                {/* 路由容器 */}
                {this.props.children}
            </div>
        )
    }
}
