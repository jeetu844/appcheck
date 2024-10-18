import {urlConfig} from '../../config/urls';
import {APP_LOG} from '../../utils/helperFunctions';
import {
  apiPost,
  clearRememberedData,
  clearUserData,
  setIntroScreenStatus,
  setRememberedData,
  setUserData,
} from '../../utils/utils';
import {
  saveIntroScreenStatus,
  saveRememberedData,
  saveSplashStatus,
  saveUserData,
} from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

export function changeIntroScreenStatus(data: boolean) {
  dispatch(saveIntroScreenStatus(data));
}

export function userDataSave(data: object | string | null) {
  dispatch(saveUserData(data));
}

export function onSaveRememberedData(data: object | string | null) {
  dispatch(saveRememberedData(data));
}

export function onSaveSplashStatus(data: boolean) {
  dispatch(saveSplashStatus(data));
}

export function onSaveIntroScreenStatus(data: boolean) {
  setIntroScreenStatus(data)
    .then(() => {
      changeIntroScreenStatus(data);
    })
    .catch(() => APP_LOG('AsyncStorage error'));
}

export function onSaveUserDataInAsync(data: object | string) {
  setUserData(data)
    .then(() => {
      userDataSave(data);
    })
    .catch(() => APP_LOG('AsyncStorage error'));
}

export function onSaveRememberedDataInAsync(data: object | string) {
  setRememberedData(data)
    .then(() => {
      onSaveRememberedData(data);
    })
    .catch(() => APP_LOG('AsyncStorage error'));
}

export const removeUserSession = async () => {
  userDataSave(null);
  await clearUserData();
};

export const removeRememberedData = async () => {
  await clearRememberedData();
  onSaveRememberedData(null);
};

//LOGIN USER
export function userLogin(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(urlConfig.LOG_IN, data, headers)
      .then(async (res: any) => {
        resolve(res);
        onSaveUserDataInAsync(res?.data);
        // await setTokenData(res?.data?.token);
      })
      .catch(error => {
        reject(error);
      });
  });
}

//SIGN UP USER
export function userSignUp(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(urlConfig.SIGN_UP, data, headers)
      .then(async (res: any) => {
        resolve(res);
        await setUserData(res?.data);
        // await setTokenData(res?.data?.token);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function userVerifyOtp(data: object, headers?: object) {
  return apiPost(urlConfig.VERIFY_OTP, data, headers);
}

export function userCheck(data: object, headers?: object) {
  return apiPost(urlConfig.CHECK_USER, data, headers);
}

export function onLogout(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(urlConfig.LOGOUT, data, headers)
      .then(async (res: any) => {
        resolve(res);
        removeUserSession();
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function forgotPassword(data: object, headers?: object) {
  return apiPost(urlConfig.FORGOT_PASSWORD, data, headers);
}

export function resetPassword(data: object, headers?: object) {
  return apiPost(urlConfig.RESET_PASSWORD, data, headers);
}

export function onDeleteUser(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(urlConfig.DELETE_ACCOUNT, data, headers)
      .then(async (res: any) => {
        resolve(res);
        removeUserSession();
      })
      .catch(error => {
        reject(error);
      });
  });
}

//LOGIN USER
export function userSocialLogin(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(urlConfig.SOCIAL_LOGIN, data, headers)
      .then(async (res: any) => {
        resolve(res);
        onSaveUserDataInAsync(res?.data);
        // await setTokenData(res?.data?.token);
      })
      .catch(error => {
        reject(error);
      });
  });
}
