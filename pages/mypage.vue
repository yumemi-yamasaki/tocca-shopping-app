<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile @click="toHome">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toContact">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>TOCCA</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
        <div class="main">
            <Itemlist item-kind="vegetable" list-name="野菜/果物" @addItem="popupModalVegetable" :list="this.itemList.vegetable" @deleteItemCard="deleteItemCard"/>
            <Itemlist item-kind="meat" list-name="お肉/お魚" @addItem="popupModalMeat" :list="this.itemList.meat" @deleteItemCard="deleteItemCard"/>
            <Itemlist item-kind="others" list-name="その他（乳製品,調味料など）" @addItem="popupModalOthers" :list="this.itemList.others" @deleteItemCard="deleteItemCard"/>
        </div>
        <Popupmodal v-if="showModal" :itemKind="this.itemKind" @closeModal="closeModal" @addItem="addItemToStore"/>
    </v-content>
    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy;ひかチャン！</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Itemlist from '~/components/Itemlist';
import Popupmodal from '~/components/PopupModal';
import clonedeep from 'lodash.clonedeep';
import firebase from '~/utils/firebase.js';

  export default {
    components: {
        Itemlist,
        Popupmodal
    },
    data: () => {
        return {
            drawer: null,
            showModal: false,
            itemKind: '',
            database: null
        }
    },
    props: {
      source: String
    },
    computed: {
        ...mapState(['itemList'])
    },
    methods: {
        deleteItemCard(value) {
          this.$store.dispatch('deleteItemCard', value);
        },
        popupModalVegetable() {
            this.itemKind = "vegetable";
            this.showModal = true;
        },
        popupModalMeat() {
            this.itemKind = "meat";
            this.showModal = true;
        },
        popupModalOthers() {
            this.itemKind = "others";
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        addItemToStore() {
            this.showModal = false;
        },
        toHome() {
            console.log('Go to Home.');
        },
        toContact() {
            console.log('Go to Contact.');
        }
    },
    async fetch({ store }) {
    const val = await firebase.app().functions('asia-northeast1').httpsCallable('getData')();
    console.log(val.data);
      if(val.data){
         store.dispatch('updateItemList', val.data);
      }else{
         val.data = {
            vegetable: [],
            meat: [],
            others: []
         }
         store.dispatch('updateItemList', val.data);
      }
  }
  }
</script>

<style>
.application--wrap {
  background: #fff !important;
}
p {
    margin: 0;
}
.page-title {
    text-align: center;
    margin: 10px;
}
.item {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px;
    border-bottom: 1px solid #555;
    min-height: 51px;
}

.item-name {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
}

.item-price {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
}

/* ポップアップスタイル */
.popup {
    width: 300px;
    /* height: 350px; */
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #555;
    background: #fff;
    margin-bottom: 100px;
}

/* ボタン */
.btn-area {
    display: flex;
    justify-content: space-between;
}
</style>