import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  position: 'top-right',
  duration: 5000,
  theme: 'outline',
  action: {
    text: '×',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
});