import Vuex from 'vuex';
import firebase from '~/utils/firebase';

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {},
         itemList: {
             vegetable: [],
             meat: [],
             others: []
         },
      }),
      mutations: {
        setAuth(state, payload) {
         state.auth = {
            uid: payload.uid,
            userName: payload.userName
         }
        },
        updateItemList(state, payload) {
           state.itemList = payload;
        },
        setItemVegetable(state, payload) {
           state.itemList.vegetable.push({
              name: payload.name,
              price: payload.price
            });
            // this.updateItemList();
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
         }
      },
      actions: {
         setAuth(store, payload) {
             store.commit('setAuth', payload);
         },
         // 野菜をセット
         async setItemVegetable(store, payload) {
            store.commit('setItemVegetable', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(store.state.itemList);
         },
         // お肉・お魚をセット
         async setItemMeat(store, payload) {
            store.commit('setItemMeat', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(store.state.itemList);
         },
         // // その他
         // async setItemOthers(store, payload) {
         //    store.commit('setItemOthers', payload);
         //    await firebase.app().functions('asia-northeast1').httpsCallable('setData')(store.state.itemList);
         // },
         async deleteItemCard(store, payload) {
            store.commit('deleteItemCard', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(store.state.itemList);
         },
         // アイテムリストを更新する
         async updateItemList(store, payload) {
            console.log('更新');
            console.log(payload);
            store.commit('updateItemList', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(payload);
         }
      }
   })
}

export default createStore;