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
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>


<style lang="scss"></style>
