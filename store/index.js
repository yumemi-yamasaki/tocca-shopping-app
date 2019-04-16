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
        },
        setItemMeat(state, payload) {
         state.itemList.meat.push({
            name: payload.name,
            price: payload.price
          })
         },
         setItemOthers(state, payload) {
         state.itemList.others.push({
            name: payload.name,
            price: payload.price
          })
         },
         deleteItemCard(state, payload) {
            state.itemList[payload.itemKind].splice(payload.index, 1);
            // console.log(state.itemList[payload.itemKind]);
         }
      },
      actions: {
         setAuth(store, payload) {
             store.commit('setAuth', payload);
         },
         // 野菜をセット
         setItemVegetable(store, payload) {
            store.commit('setItemVegetable', payload);
         },
         // お肉・お魚をセット
         setItemMeat(store, payload) {
            store.commit('setItemMeat', payload);
         },
         // その他
         setItemOthers(store, payload) {
            store.commit('setItemOthers', payload);
         },
         deleteItemCard(store, payload) {
            // console.log(payload);
            // console.log(index);
            store.commit('deleteItemCard', payload);
            // console.log(payload);
         }
      }
   })
}

export default createStore;