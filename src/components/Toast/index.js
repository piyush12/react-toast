import React from "react";
import useNotification from "../../hooks/useNotification";
import { ToastContainer, ToastItem } from "./style";

function Toastify({ position }) {
  const { notify } = useNotification();

  return (
    <ToastContainer position={position}>
      {notify.map((noitfy) => (
        <ToastItem key={noitfy.id} type={noitfy.type}>
          {noitfy.message}
        </ToastItem>
      ))}
    </ToastContainer>
  );
}

Toastify.defaultProps = {
  type: "default",
  position: "bottom right",
};

export default Toastify;
