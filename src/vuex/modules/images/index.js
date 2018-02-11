import * as actions from './actions';
import * as getters from './getters';

import {
  FETCH_IMAGES,
  SAVE_IMAGE,
  DELETE_SAVED_IMAGE,
} from './mutation-types';

// initial state
const initialState = {
  images: [],
  savedImages: [],
};

// mutations
const mutations = {
  [FETCH_IMAGES](state, image) {
    // assign the images that we got from our FETCH_IMAGES event to state.images
    state.images.push({
      id: image.split('=')[1],
      url: image,
      save: false
    });
  },

  [SAVE_IMAGE](state, image) {
    const index = state.images.findIndex(p => p.id === image.id);
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      state.images.splice(index, 1, {...image, save: true});
      state.savedImages.push({...image, save: true});
    }
  },

  [DELETE_SAVED_IMAGE](state, image) {
    const index = state.images.findIndex(p => p.id === image.id);
    if (index !== -1) {
      state.images.splice(index, 1, {...image, save: false});
      state.savedImages = state.savedImages.filter(p => p.id !== image.id);
    }
  }
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};
