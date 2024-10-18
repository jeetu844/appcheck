import {BASE_URL_LIVE} from '@env';

export let urlConfig = {
  BASE_URL: BASE_URL_LIVE,

  //api end points here
  LOG_IN: 'login',
};

export function updateUrlConfigData(newUrlConfig: any) {
  urlConfig = {...urlConfig, ...newUrlConfig};
}

export const getCompleteUrl = (endpoint: string) =>
  urlConfig.BASE_URL + 'api/' + endpoint;
