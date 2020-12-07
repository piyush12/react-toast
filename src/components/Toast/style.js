import styled from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  right: ${(props) => {
    if (props.position.includes("right")) {
      return 0;
    } else return "auto";
  }};
  left: ${(props) => {
    if (props.position.includes("left")) {
      return 0;
    } else return "auto";
  }};
  top: ${(props) => {
    if (props.position.includes("top")) {
      return 0;
    } else return "auto";
  }};
  bottom: ${(props) => {
    if (props.position.includes("bottom")) {
      return 0;
    } else return "auto";
  }};
`;

const ToastItem = styled.div`
  background-color: ${({ type }) =>
    type === "success"
      ? "#9bef9f"
      : type === "warning"
      ? "#ffc107"
      : type === "alert"
      ? "#f5450e"
      : type === "default"
      ? "#eee"
      : "#eee"};
  padding: 15px;
  border-radius: 6px;
  margin: 1rem;
  font-size: 0.8rem;
  color: ${({ type }) => (type === "alert" ? "#fff" : "#000")};
  position: relative;
`;

export { ToastContainer, ToastItem };
