import { SetupContext } from "@/vueWrapper";

export const useStore = (context: SetupContext) => {
  const {
    root: {
      $store: { state, getters, commit, dispatch }
    }
  } = context;
  return {
    state,
    getters,
    commit,
    dispatch
  };
};
