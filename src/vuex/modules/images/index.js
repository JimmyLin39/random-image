import * as actions from './actions';
import * as getters from './getters';

import {
  FETCH_IMAGES,
  FETCH_SAVED_IMAGES,
  UPDATE_SAVED_IMAGES,
  DELETE_SAVED_IMAGES,
} from './mutation-types';

// initial state
const initialState = {
  images: [],
  savedImages: [],
};

// mutations
const mutations = {
  // [FETCH_IMAGES](state, images) {
  //   const index = state.all.findIndex(p => p.id === images.id);
  //   if (index === -1) {
  //     state.all.push(images);
  //   } else {
  //     state.all.splice(index, 1, images);
  //   }
  // },

  [FETCH_IMAGES](state, images) {
    // assign the images that we got from our FETCH_IMAGES event to state.all
    state.all = images;
  },

  // [CREATE_INVENTORY](state, inventory) {
  //   state.all.push(inventory);
  // },

  [UPDATE_SAVED_IMAGES](state, image) {
    const index = state.all.findIndex(p => p.id === image.id);
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, image);
    }
  },

  [DELETE_SAVED_IMAGES](state, imageId) {
    state.all = state.all.filter(p => p.id !== imageId);
  }
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};
