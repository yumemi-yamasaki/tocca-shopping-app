import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {},
         itemList: {
             vegetable: [
                {
                   name: 'りんご',
                   price: '129'
                },
                {
                  name: 'りんご',
                  price: '129'
               }
             ],
             meat: [
               {
                  name: '豚バラ',
                  price: '129'
               }
             ],
             others: [
               {
                  name: '牛乳',
                  price: '129'
               }
             ]
         },
      }),
      mutations: {
        setAuth(state, payload) {
             state.auth = {
                 uid: payload.uid,
                 userName: payload.userName
             }
        },
        setItemVegetable(state, payload) {
           state.itemList.vegetable.push({
              name: payload.name,
              price: payload.price
            })
        }
      },
      actions: {
         setAuth(store, payload) {
             store.commit('setAuth', payload);
         },
         setItemVegetable(store, payload) {
            store.commit('setItemVegetable', payload);
         }
      }
   })
}

export default createStore;