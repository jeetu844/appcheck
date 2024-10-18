import {isEmpty} from 'lodash';
import {i18n} from '../constants/lang';
const t = i18n.t;

export let regx = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
  name: /^(?! )[a-zA-Z]+(?: [a-zA-Z]+)* ?$/,
  password: /^\S+$/,
  hasSpace: /\s/,
  spaceValidation: /^[^\s](?!\s)[\s\S]*[^\s](?<!\s\s)$/,
  message: '',
  withoutEmoji:
    /^[a-zA-Z0-9#_+\=\[\]\{\}\/`~<>;,.?*"”'’,?*()!@#$%^&:£€•:"-|\|]+( [a-zA-Z0-9#_+\=\[\]\{\}\/`~<>;,.?*"'’,?*()!@#$%^&:£€•:"-|\|]+)*$/,
  numericRegex: /^[0-9]+$/,
  numericWithDotRegex: /^[0-9.]+$/,
};

export function updateRegxConfig(newRegxConfig: any) {
  regx = {...regx, ...newRegxConfig};
}

export default function (data?: any) {
  const {
    name,
    email,
    password,
    confirmPassword,
    newPassword,
    confirmNewPassword,
    isAcceptTerms,
    otp,
    oldPassword,
    catchLogImg,
    description,
    selectedDate,
    locationText,
    fishSpecies,
    flyUsed,
    waterBody,
  } = data;

  if (name !== undefined && !regx.name.test(name)) {
    return t('FULL_NAME_VALID');
  }

  if (email !== undefined && !regx.email.test(email)) {
    return t('EMAIL_INVALID');
  }

  if (password !== undefined && password.length == 0) {
    return t('PASSWORD_EMPTY');
  }
  if (password !== undefined && !regx.password.test(password)) {
    return t('PASSWORD_INVALID');
  }
  if (password !== undefined && password.length < 6) {
    return t('PASSWORD_LENGTH');
  }

  if (confirmPassword !== undefined && confirmPassword.length == 0) {
    return t('CONFIRM_PASSWORD_EMPTY');
  }

  if (password !== undefined && !regx.password.test(confirmPassword)) {
    return t('CONFIRM_PASSWORD_INVALID');
  }

  if (confirmPassword !== undefined && confirmPassword.length < 6) {
    return t('CONFIRM_PASSWORD_LENGTH');
  }

  if (confirmPassword !== undefined && !regx.password.test(confirmPassword)) {
    return t('CONFIRM_PASSWORD_INVALID');
  }

  if (
    confirmPassword !== undefined &&
    password !== undefined &&
    password != confirmPassword
  ) {
    return t('CONFIRM_PASSWORD_COMPARE');
  }

  if (oldPassword !== undefined && oldPassword.length == 0) {
    return t('OLD_PASSWORD_EMPTY');
  }

  if (oldPassword !== undefined && !regx.password.test(oldPassword)) {
    return t('OLD_PASSWORD_INVALID');
  }

  if (oldPassword !== undefined && oldPassword.length < 6) {
    return t('OLD_PASSWORD_LENGTH');
  }

  if (newPassword !== undefined && newPassword.length == 0) {
    return t('NEW_PASSWORD_EMPTY');
  }

  if (newPassword !== undefined && !regx.password.test(newPassword)) {
    return t('NEW_PASSWORD_INVALID');
  }

  if (newPassword !== undefined && newPassword.length < 6) {
    return t('NEW_PASSWORD_LENGTH');
  }
  if (confirmNewPassword !== undefined && confirmNewPassword.length == 0) {
    return t('CONFIRM_NEW_PASSWORD_EMPTY');
  }
  if (
    confirmNewPassword !== undefined &&
    !regx.password.test(confirmNewPassword)
  ) {
    return t('CONFIRM_NEW_PASSWORD_INVALID');
  }
  if (confirmNewPassword !== undefined && confirmNewPassword.length < 6) {
    return t('CONFIRM_NEW_PASSWORD_LENGTH');
  }
  if (
    confirmNewPassword !== undefined &&
    newPassword !== undefined &&
    newPassword != confirmNewPassword
  ) {
    return t('NEW_CONFIRM_PASSWORD_COMPARE');
  }
  if (isAcceptTerms !== undefined && isAcceptTerms == false) {
    return t('ACCEPT_TERMS_CONDITION');
  }

  if (catchLogImg !== undefined && isEmpty(catchLogImg)) {
    return t('CATCH_LOG_IMG_VALID');
  }

  if (fishSpecies !== undefined && fishSpecies.length < 1) {
    return t('FISH_SPECIES_VALID');
  }
  if (flyUsed !== undefined && flyUsed.length < 1) {
    return t('FLY_USED_VALID');
  }

  if (locationText !== undefined && locationText === '') {
    return t('LOCATION_VALID');
  }

  if (selectedDate !== undefined && selectedDate == '') {
    return t('SELECT_DATE_VALID');
  }

  if (waterBody !== undefined && waterBody.length < 1) {
    return t('WATER_BODY_VALID');
  }

  if (description !== undefined && description.length < 1) {
    return t('DESC_NAME_VALID');
  }
}
