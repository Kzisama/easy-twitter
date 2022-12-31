import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { GithubFilled, QqCircleFilled } from "@ant-design/icons";
import style from "./index.module.scss";

// 用户名和密码正则校验规则
const userReg: RegExp = /^[a-zA-Z0-9_]{6,10}$/;

const Register: FC = () => {
  // 用户名和密码校验规则
  const userNameVaildator = (_: any, val: string) => {
    if (!userReg.test(val)) {
      return Promise.reject(new Error("由6~10位数字字母下划线组成"));
    }
    return Promise.resolve();
  };

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
          <h3 className="title">Create An Account</h3>
          <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              name="username"
              hasFeedback
              validateTrigger="onBlur"
              rules={[
                { validator: userNameVaildator },
                { required: true, message: "Please input your username!" },
              ]}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              validateTrigger="onBlur"
              rules={[
                { validator: userNameVaildator },
                { required: true, message: "Please input your password!" },
              ]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!",
                      ),
                    );
                  },
                }),
              ]}>
              <Input.Password placeholder="Confirm your password" />
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
            <Link to="/login">已有帐号？去登陆</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
