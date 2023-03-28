<script>
import { store } from '../../store';
import axios from 'axios';

import CardElement from './CardElement.vue';
import MainSelector from './MainSelector.vue';

export default {
  name: 'AppMain',
  components: {
    CardElement,
    MainSelector
  },
  data() {
    return {
      store
    }
  },
  methods: {
    fetchInitialCards() {
      this.checkLoading()
      for (let index = 0; index < 20; index++) {
        console.log("Eseguito")
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
          .then((response) => {
            console.log(response.data);
            this.store.cards.push(response.data)
          })
      }
    },
    fetchArchetype() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          archetype: store.selectedValue,
          language: 'it'
        }
      })
        .then((response) => {
          this.checkLoading()
          this.store.cards = response.data.data;
          this.store.cardsFounded = response.data.data.length;
        })
    },
    checkLoading() {
      this.store.isLoading = true
      let prevValue = this.store.cards.length

      let interval = setInterval(() => {
        if (this.store.cards.length !== prevValue) {
          prevValue = this.store.cards.length
        } else {
          this.store.isLoading = false
          clearInterval(interval);
        }
      }, 500);
    }
  },
  created() {
    this.fetchInitialCards()
  }
}
</script>

<template>
  <main>
    <MainSelector @searchValue="fetchArchetype"></MainSelector>
    <div class="container bg-white mt-3">
      <div class="row p-2">
        <div class="col-12">
          <div class="p-2 bg-black text-white">Found {{ store.cards.length }} cards</div>
        </div>
        <CardElement v-for="card in store.cards" v-if="store.isLoading === false" :img="card.card_images[0].image_url"
          :text1="card.name" :text2="card.race"></CardElement>
        <div v-else class="align-self-center p-3 text-center">
          <span class="loader"><span class="loader-inner"></span></span>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid black;
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: $primary-color;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>