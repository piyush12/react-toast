import { useContext } from "react";

import { NotificationContext } from "../context/notificationContext";

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("must wrap inside notification");
  }
  return context;
};

export default useNotification;
