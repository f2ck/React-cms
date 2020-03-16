//引入React
import React from "react";
//npm i react-router-dom 安装React 路由包
//导入路由外层包裹的组件   组件有hashrouter 相当于vue中的hash   还有BrowerRouter相当于vue中的history
//as为重命名 将hashrouter重新命名为router  所以路由包裹的router

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../views/login/login";
import DashBoard from "../views/dashboard/dashBoard";
//函数式组件
const BlogRouter = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />

      <Route path="/" component={DashBoard} />
    </Switch>
  </Router>
);

export default BlogRouter;
