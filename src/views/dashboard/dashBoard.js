import React, { Component } from "react";
import User from "../usermanage/User";
import Home from "../home/Home";
import List from "../articlemanage/List";
import Preview from "../articlemanage/Preview";
import Manage from "../rightmanage/Manage";
import Role from "../rightmanage/Role";
import Right from "../rightmanage/Right";
import NotFound from "../error/Error";
import {
  Route, //每个路由组件都需要此组件
  Redirect, // 重定向
  Switch // 匹配到第一个符合条件路径的组件， 就停止
} from "react-router-dom";
import "./Dashboard.css";
import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SideMenu from "./SideMenu";
import TopHeader from './TopHeader'
const {  Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <SideMenu></SideMenu>
        <Layout className="site-layout">
        <TopHeader></TopHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            <Switch>
              {/* 首页 */}
              <Route path="/home" component={Home} />

              {/* 用户管理-用户列表 */}
              <Route path="/user-manage/users" component={User} />

              {/* 文章管理 -列表 ,预览(动态路由组件) */}
              <Route path="/article-manage/list" component={List} />
              <Route path="/article-manage/preview/:myid" component={Preview} />

              {/* 权限管理- 角色和权限 */}
              <Route
                path="/right-manage"
                render={() => (
                  <Manage>
                    <Switch>
                      <Route path="/right-manage/roles" component={Role} />
                      <Route path="/right-manage/rights" component={Right} />
                      <Redirect from="/right-manage" to="/right-manage/roles" />
                    </Switch>
                  </Manage>
                )}
              />
              {/* 重定向 */}
              <Redirect from="/" to="/home" exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default class DashBoard extends Component {
  render() {
    return <SiderDemo />;
  }
}
