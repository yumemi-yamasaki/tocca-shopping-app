<template>
  <div>
    <div class="item">
      <p class="item-name">{{ item.name }}</p><p class="item-price">{{ item.price }}円</p>
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
    }
  },
  computed: {
  },
  methods: {}
}
</script>

<style>
</style>