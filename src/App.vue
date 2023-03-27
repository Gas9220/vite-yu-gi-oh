<script>
import axios from 'axios';
import { store } from './store';

import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  created() {
    // Test con un solo elemento
      axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
        .then((response) => {
          console.log(response.data);
          this.store.cards.push(response.data)
        })       
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>


<style lang="scss"></style>
