import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export const NavModal: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        <MoreOutlined style={{ fontSize: "1.2rem" }} />
      </Button>
      <Modal
        // title="20px to Top"
        style={{ top: 20 }}
        width="22rem"
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        {/* rgb(148 163 184) */}
        <p className="modal__text" >Docs</p>
        <p>Components</p>
        <p>some contents...</p>
      </Modal>
      <br />
    </>
  );
};
