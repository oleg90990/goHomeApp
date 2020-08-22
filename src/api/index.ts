import ApiBase, { Mode } from 'friendshome-api';
import Toast from '../utilites/toastr';

// const mode = process.env.NODE_ENV === 'development' ? Mode.dev : Mode.prod

const api = new ApiBase(Mode.dev, null, error => {
    Toast.error(error);
})

export const dictionariesApi = api.getDictionariesApi();
export const userApi = api.getUserApi();
export const adsApi = api.getAdsApi();
export const vkApi = api.getVkApi();
