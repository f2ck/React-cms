import React, { Component } from "react";

export default class Preview extends Component {
  componentDidMount() {
    console.log("获取id,再ajax请求", this.props.match.params.myid);
  }

  render() {
    return <div>preview</div>;
  }
}
