import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {},
      }),
      mutations: {
        setAuth(state, payload) {
             state.auth = {
                 uid: payload.uid,
                 userName: payload.userName
             }
        }
      },
      actions: {
         setAuth(store, payload) {
             store.commit('setAuth', payload);
         }
      }
   })
}

export default createStore;