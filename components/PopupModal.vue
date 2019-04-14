<template>
    <transition class="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <p>商品名（入力例.トマト, 鶏ムネ肉100g）</p>
                    <v-textarea solo/>
                    <p>価格（入力例.98, 108）</p>
                    <v-textarea solo/>
                    <div class="btn-area">
                        <v-btn depressed dark color="#ed6c61" class="p-btn" @click="$emit('closeModal')">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-btn depressed dark color="#62c655" class="p-btn" @click="$emit('addItem')">
                            <p>追加</p>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  components: {
  },
  props: {
  },
  computed: {
  },
  methods: {
      close() {
          console.log('Close');
      },
      add() {
          console.log('OK');
      }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
</style>
