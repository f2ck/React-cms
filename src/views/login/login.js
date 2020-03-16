import React, { Component } from "react";
import Particles from 'react-particles-js';
import "./login.css";
import { Form, Input, Button, Checkbox,Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{background: 'rgb(35, 39, 65)',height:"100%"}}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!"
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!"
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color:"white"}}>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item style={{color:"white"}}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">现在注册!</a>
      </Form.Item>
    </Form>
    <Particles height={window.innerHeight-5+"px"}
                params={{
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": false,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 800,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 800,
                            "size": 80,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 400,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      }
                }}/>

    </div>
  );
};
export default class login extends Component {
  render() {
    return (
      <div>
        <NormalLoginForm />
      </div>
    );
  }
}
