import NetInfo from '@react-native-community/netinfo';
import moment from 'moment';
import {Alert, Platform} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import {Image} from 'react-native-compressor';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-toast-message';

import {i18n} from '../constants/lang';

export let fileSystem = RNFetchBlob.fs;
export let cameraMediaPath = fileSystem.dirs.CacheDir;

const t = i18n.t;

interface AlertOptions {
  title?: string;
  message?: string;
  yesText?: string;
  noText?: string;
  onYes?: () => void;
  onNo?: () => void;
  buttons?: ButtonConfig[];
  isNoButton?: boolean;
}
export interface LocationObject {
  latitude: number;
  longitude: number;
}

interface ButtonConfig {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

const isIos = Platform.OS === 'ios' ? true : false;
const isTablet = DeviceInfo.isTablet();
const mediaGlobalPath = isIos ? `` : 'file://';

const showAlert = ({
  title = '',
  message = '',
  yesText = t('YES'),
  noText = t('NO'),
  onYes = () => {},
  onNo = () => {},
  buttons = [],
  isNoButton = true,
}: AlertOptions): void => {
  const defaultButtons: ButtonConfig[] = [{text: yesText, onPress: onYes}];

  if (isNoButton) {
    defaultButtons.unshift({text: noText, onPress: onNo, style: 'cancel'});
  }

  const alertButtons = [...defaultButtons, ...buttons].map(button => ({
    text: button.text,
    onPress: button.onPress,
    style: button.style || 'default',
  }));

  Alert.alert(title, message, alertButtons, {cancelable: false});
};

const showError = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    autoHide: true,
    swipeable: false,
    visibilityTime: 3000,
  });
};

const showSuccess = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    autoHide: true,
    swipeable: false,
    visibilityTime: 3000,
  });
};
const showInfo = (message: string) => {
  Toast.show({
    type: 'info',
    text1: message,
    autoHide: true,
    swipeable: false,
    visibilityTime: 3000,
  });
};

const checkIsNetConnected = async () => {
  try {
    const info = await NetInfo.fetch();
    return info.isConnected && info.isInternetReachable;
  } catch (error) {
    APP_LOG('Error checking network status:', error);
    return false;
  }
};
const errorMethod = async (error: any) => {
  try {
    showError(error?.message || error?.error || error);
  } catch (errr) {
    showError(error?.message || error?.error || error);
  }
};

const APP_LOG = (message?: any, ...optionalParams: any[]) => {
  console.log(message, ...optionalParams);
};

export let DEVICE_INFO = {
  device_id: DeviceInfo.getDeviceId(),
  device_type: String(Platform.OS).toUpperCase(),
  device_uniqueid: DeviceInfo.getUniqueIdSync(),
  version_name: DeviceInfo.getVersion(),
};

export const methodExtension = (url: string = '') => {
  return '.' + url?.split('.').pop();
};

export const mediaPath = (url: string) => {
  let urlNew: any = String(url)?.replace(/ /g, '');

  return urlNew?.split('/').pop().split('.', 1).pop();
};

const configureRNFetchBlob = (url: string = '', method: any = 'GET') => {
  let extension = methodExtension(url);
  let path = mediaPath(url);

  let options = {
    fileCache: true,
    path: `${fileSystem.dirs.DocumentDir}/ninehertflow/${path}${
      extension || '.jpg'
    }`,
    appendExt: extension || 'jpg',
  };

  return new Promise(async (resolve, reject) => {
    await RNFetchBlob.config(options)
      .fetch(method, url)
      .then(resolve)
      .catch(reject);
  });
};

// Check end date is smaller than to the current date
const endDateSmallerThanCurrentDate = (targetDate: any) => {
  const endDate = moment(targetDate);
  const currentDate = moment();
  const result = endDate.isBefore(currentDate);
  return result;
};

const getMediaNameFromPath = (path: string = '') => {
  let mediaNameWithExtension: string | undefined = !!path
    ? path.split('/').pop()
    : '';
  let mediaName = !!mediaNameWithExtension
    ? mediaNameWithExtension.split('.').slice(0, -1).join('.')
    : '';
  return mediaName;
};

const formatMediaDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.round(duration % 60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedMinutes}.${formattedSeconds}`;
};

const compressMedia = async (
  path: string,
  type: 'Image' | 'Video' = 'Image',
): Promise<string> => {
  try {
    const compressedPath = await Image.compress(path, {
      quality: 1,
    });
    return compressedPath;
  } catch (error) {
    APP_LOG(`${type} Compression failed:`, error);
    return path;
  }
};

const calculateWeight = (weight: number) => {
  // const pounds = Math.floor(weight);

  // // Extract ounces by converting the fractional part
  // const ounces = Math.round((weight - pounds) * 16);

  // return `${pounds} lb ${ounces} oz`;
  // const pounds = Math.floor(weight);

  // Extract ounces by converting the fractional part
  // const ounces = Math.round((weight - pounds) * 16);

  return `${weight} ${t('LBS')}`;
};

export {
  APP_LOG,
  checkIsNetConnected,
  compressMedia,
  configureRNFetchBlob,
  endDateSmallerThanCurrentDate,
  errorMethod,
  formatMediaDuration,
  getMediaNameFromPath,
  isIos,
  isTablet,
  mediaGlobalPath,
  showAlert,
  showError,
  showInfo,
  showSuccess,
  calculateWeight,
};
