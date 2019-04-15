<template>
  <div>
    <div class="item">
      <p class="item-name">{{ item.name }}</p><p class="item-price">{{ item.price }}円</p>
      <v-btn depressed small color="error" @click="removeItem">
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
  computed: {
  },
  methods: {
    removeItem(index) {
      this.$emit('removeItem', this.index);
    }
  }
}
</script>

<style>
</style>