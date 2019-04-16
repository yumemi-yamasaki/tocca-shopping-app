<template>
  <div>
    <div class="item" @click="showDleteBth">
      <p class="item-name">{{ item.name }}</p><p class="item-price">{{ item.price }}円</p>
      <v-btn v-if="showDeleteFlg" depressed small color="error" @click="deleteItemCard">
        <v-icon>clear</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    item: {
      type: Object,
      default: function () {
        return { name: '', price: '' }
      }
    },
    index: {
      type: Number,
      default: ''
    }
  },
  data() {
     return {
       showDeleteFlg: false
     };
  },
  computed: {
  },
  methods: {
    showDleteBth() {
      if(this.showDeleteFlg) {
        this.showDeleteFlg = false;
      } else {
        this.showDeleteFlg = true;
      }
    },
    deleteItemCard() {
      // this.showDleteBth();
      this.$emit('deleteItemCard', this.index);
      // this.$store.dispatch('deleteItemCard', this.index);
    }
  }
}
</script>

<style>
</style>