import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 1.5rem;
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  border-bottom: 0.1rem solid #cbd5e11a;
  .left {
    display: flex;
  }
  .img__container {
    margin-right: 0.5rem;
  }
  .dropdown {
    display: flex;
    border-radius: 1rem 1rem 1rem 1rem;
    padding: 0.2rem 0.5rem;
    background-color: #94a3b81a;
    box-shadow: inset 0 1px 0 0 #ffffff0d;
  }
  .dropdown:hover {
    cursor: pointer;
  }
  .dropdown__text {
    color: white;
    font-size: 0.8rem;
    font-weight: 800;
  }
  .right {
    display: flex;
  }
  .search__icon {
    margin-right: 1rem;
  }
  .ant-modal-body {
    color: white;
  }
`;

export default Wrapper;
