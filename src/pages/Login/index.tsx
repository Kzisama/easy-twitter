import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { GithubFilled, QqCircleFilled } from "@ant-design/icons";
import style from "./index.module.scss";

const Login: FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.box}>
      <div className="bg-box"></div>
      <div className="Login">
        <div className="login-form">
          <h3 className="title">Welcome</h3>
          <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}>
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}>
                Submit
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <GithubFilled style={{ fontSize: "25px", marginRight: "40px" }} />
              <QqCircleFilled style={{ fontSize: "25px" }} />
            </Form.Item>
            <Link to="/register">没有账号？立即注册</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
