<script>
import { store } from '../../store';

import CardElement from './CardElement.vue';

export default {
    name: 'AppMain',
    components: {
        CardElement
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container bg-white mt-5">
        <div class="row p-2">
            <div class="col-12">
                <div class="p-2 bg-black text-white">Found {{store.cards.length}} cards</div>
            </div>
            <CardElement v-for="card in store.cards" v-if="store.cards.length === 39" :img="card.card_images[0].image_url" :text1="card.name" :text2="card.race"></CardElement>
            <div v-else class="col-12">
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>