import { SearchOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo.png";
import Wrapper from "../assets/Wrappers/Navbar";

//? DROPDOWN
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { items } from "../utils/Dropdown";

// ? Modal
import { NavModal } from "../utils/Modal";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="left">
        <div className="img__container">
          <img src={logo} alt="Logo" />
        </div>
        {/* Drop down */}
        {/* background-color: rgb(30 41 59) */}
        <Dropdown
          menu={{ items }}
          className="dropdown"
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="dropdown__text">
              v3.3.3
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="right">
        <SearchOutlined
          className="search__icon"
          style={{ fontSize: "1.2rem" }}
        />
        <NavModal />
      </div>
    </Wrapper>
  );
};

export default Navbar;
