import * as MutationType from './mutation.type';

const Mutations = {
  [MutationType.OVERFLOW_HIDDEN_STATUS] (state, params) {
    state.overflowHiddenStatus = params;
  }
};

export default Mutations;
