import { createStore, createLogger } from "vuex";

import admin from "./modules/admin";

const node_env = process.env.NODE_ENV !== "production";

const store = createStore({
  modules: {
    admin,
  },
  strict: node_env,
  plugins: node_env ? [createLogger()] : [],
});

export default store;
