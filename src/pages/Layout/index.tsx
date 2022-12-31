import { FC, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { Avatar } from "antd";
import {
  TwitterCircleFilled,
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

// 图标样式
const sty = { color: "#fff", fontSize: "30px" };

const Layout: FC = () => {
  const [options, setOptions] = useState([
    {
      el: <HomeOutlined style={sty} />,
      text: "Home",
      path: "/",
    },
    {
      el: <TeamOutlined style={sty} />,
      text: "Follows",
      path: "/follows",
    },
    {
      el: <UserOutlined style={sty} />,
      text: "Profile",
      path: "/profile",
    },
  ]);

  const nav = useNavigate();

  return (
    <div className={style.Layout}>
      <aside>
        <ul className="optionsList">
          <li>
            <TwitterCircleFilled style={sty} />
          </li>
          {options.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}>
                {item.el}
                <span className="discribe">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="push-btn">
          <button onClick={() => nav("/publish")}>Tweet</button>
        </div>
        <div className="avatar">
          <Avatar
            src="https://tupian.qqw21.com/article/UploadPic/2020-5/20205312256914412.jpg"
            size={50}
            className="icon"></Avatar>
          <div className="userInfo">
            <span>userNickName</span>
            <span>@userName</span>
          </div>
        </div>
        <div className="exit">
          <button>Exit</button>
        </div>
      </aside>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
