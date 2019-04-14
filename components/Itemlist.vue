<template>
    <div class="">
        <h2 class="list-name">{{ listName }}</h2>
        <Itemcard v-for="(item, index) in list" :key="index" :item="item"/>
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
      }
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style>
.list-name {
    margin-top: 20px;
    margin-left: 20px;
}
</style>