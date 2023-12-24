import { authKey } from "@/constants/storageKey";
import { setToLocalStorage, getFromLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  console.log(authLocalStorageData)
};
