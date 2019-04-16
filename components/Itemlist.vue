<template>
    <div>
        <h2 class="list-name">{{ listName }}</h2>
        <Itemcard v-for="(item, index) in list" :key="index" :item="item" :index="index" @deleteItemCard="deleteItemCard"/>
        <v-btn small fab depressed dark color="indigo" class="p-btn" @click="$emit('addItem')">
            <v-icon>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
import Itemcard from '~/components/Itemcard';

export default {
  components: {
      Itemcard
  },
  props: {
      list: {
          type: Array,
          default: () => []
      },
      listName: {
          type: String,
          default: ''
      },
      itemKind: {
          type: String,
          default: ''
      }
  },
  computed: {

  },
  methods: {
      removeItemfromList(index) {
          this.list.splice(index, 1);
          console.log('OK');
      },
      deleteItemCard(index) {
        //   console.log(index);
        // console.log(this.itemKind);
        this.$emit('deleteItemCard', { itemKind: this.itemKind, index: index });
        // console.log(this.itemKind);
      }
  }
}
</script>

<style>
.list-name {
    margin-top: 20px;
    margin-left: 20px;
}
</style>