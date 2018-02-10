import ImageService from '../../../services/ImageService';

import {
  FETCH_IMAGES,
  FETCH_SAVED_IMAGES,
  UPDATE_SAVED_IMAGES,
  DELETE_SAVED_IMAGES,
} from './mutation-types';

export function fetchImages({ commit }) {
  return ImageService.retrieveImages()
    .then(response => {
      // redirected url is stored in responseURL
      commit(FETCH_IMAGES, response.request.responseURL);
    })
    .catch(error => {
      console.log(error);
    });
}