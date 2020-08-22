import ApiBase, { Mode } from 'friendshome-api';
import Toast from '../utilites/toastr';
import Auth from '../utilites/auth'

// const mode = process.env.NODE_ENV === 'development' ? Mode.dev : Mode.prod

const api = new ApiBase(Mode.dev, Auth.getToken(), error => {
    Toast.error(error);
})

export const dictionariesApi = api.getDictionariesApi();
export const userApi = api.getUserApi();
export const adsApi = api.getAdsApi();
export const vkApi = api.getVkApi();
