import moment, {DurationInputArg1, DurationInputArg2} from 'moment';

export let appConfig = {
  API_DATE_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  CURRENT_TIMESTAMP: moment().format('DD-MM-YYYY HH:MM:SS'),
  APP_DATE_TIME_FORMAT: 'MM/DD/YYYY - hh:mm A',
  APP_DATE_FORMAT: 'MM/DD/YYYY',
  APP_TIME_FORMAT: 'hh:mm A',
  CACHE_CLEAR_TIME: 15 as DurationInputArg1,
  CACHE_CLEAR_TIME_UNIT: 'days' as DurationInputArg2, //  minutes| days | day | minute
};

export function updateAppConfigData(newAppConfig: any) {
  appConfig = {...appConfig, ...newAppConfig};
}
