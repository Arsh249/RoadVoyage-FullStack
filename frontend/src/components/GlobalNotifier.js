import useNotification from "antd/es/notification/useNotification";

export const GlobalNotifier = () => {
  const contextHolder = useNotification()[1];
  return <>{contextHolder}</>;
};
