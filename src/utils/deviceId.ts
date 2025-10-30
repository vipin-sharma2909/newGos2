import { v4 as uuidv4 } from "uuid";
import { getDeviceIdFromLS, setDeviceIdInLS } from "../commonFunctions";

export const getDeviceId = () => {
  let deviceId = getDeviceIdFromLS();;
  if (!deviceId) {
    deviceId = uuidv4();
    setDeviceIdInLS(deviceId);
  }
  return deviceId;
};
