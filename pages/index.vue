<template>
<div class="login">
  <h1 class="login__title">LOGIN</h1>
  <span class="login__description">- Login with Google -</span>
  <v-btn @click="clickLoginBtn" color="info">LOGIN
  </v-btn>
</div>
</template>

<script>
import firebase from '~/utils/firebase.js';
export default {
  components: {

  },
  props: {
    //  hoge: {
    //     type: Array,
    //     default: () => []
    //  }
  },
  data() {
     return {

     };
  },
  computed: {

  },
  methods: {
    clickLoginBtn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$store.dispatch('setAuth', { uid: result.user.uid, userName: result.user.displayName});
        localStorage.auth = JSON.stringify({ uid: result.user.uid, userName: result.user.displayName});
        this.$router.push('/mypage');
        this.$toasted.success('ログインしました！');
      });
    }
  }
}
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__title {
  padding: 20px 0;
}

.login__description {
  font-size: 18px;
  padding: 20px 0;
}
</style>