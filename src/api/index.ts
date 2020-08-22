import ApiBase, { Mode } from 'friendshome-api';
import Toast from '../utilites/toastr';
import Auth from '../utilites/auth'

const api = new ApiBase(Mode.prod, () => Auth.getToken(), error => Toast.error(error))

export const dictionariesApi = api.getDictionariesApi();
export const userApi = api.getUserApi();
export const adsApi = api.getAdsApi();
export const vkApi = api.getVkApi();
