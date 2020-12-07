import { createContext, useEffect, useReducer } from "react";

const NotificationContext = createContext();

function notifyReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, notify: [...state.notify, action.payload] };

    case "REMOVE":
      return {
        ...state,
        notify: state.notify.filter((item) => item.id !== action.payload.id),
      };

    default:
      throw new Error("not possible");
  }
}

const NotificationContextProvider = (props) => {
  const [notifyState, dispatch] = useReducer(notifyReducer, { notify: [] });
  const { notify } = notifyState;
  const success = (msg) => {
    const data = {
      id: randomIdGenerator(),
      message: msg,
      type: "success",
    };
    dispatch({ type: "SUCCESS", payload: data });
  };

  const alert = (msg) => {
    const data = {
      id: randomIdGenerator(),
      message: msg,
      type: "alert",
    };
    dispatch({ type: "SUCCESS", payload: data });
  };
  const warning = (msg) => {
    const data = {
      id: randomIdGenerator(),
      message: msg,
      type: "warning",
    };
    dispatch({ type: "SUCCESS", payload: data });
  };

  useEffect(() => {
    let timeout;
    if (notify.length > 0) {
      timeout = setTimeout(() => {
        dispatch({
          type: "REMOVE",
          payload: { id: notify[notify.length - 1].id },
        });
      }, 1000);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [notify]);

  return (
    <NotificationContext.Provider
      value={{ notify, success, alert, warning }}
      {...props}
    />
  );
};

function randomIdGenerator() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}

export { NotificationContextProvider, NotificationContext };
