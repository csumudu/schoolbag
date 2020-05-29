import { Button, notification, Space } from "antd";

export const useNotification = () => {
  const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
      message: title,
      description,
    });
  };

  const success = (title, description) => {
    openNotificationWithIcon("success", title, description);
  };

  const error = (title, description) => {
    openNotificationWithIcon("error", title, description);
  };
  const info = (title, description) => {
    openNotificationWithIcon("info", title, description);
  };

  return {
    success,
    error,
    info,
  };
};
