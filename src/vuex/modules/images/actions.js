import ImageService from '../../../services/ImageService';

import {
  FETCH_IMAGES,
  SAVE_IMAGE,
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

export function saveImage({ commit }, image) {
  commit(SAVE_IMAGE, image);
}