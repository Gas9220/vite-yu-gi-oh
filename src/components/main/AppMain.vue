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
                <div class="p-2 bg-black text-white">Found 39 cards</div>
            </div>
            <CardElement v-if="store.cards.length !== 0" :img="store.cards[0].card_images[0].image_url" :text1="store.cards[0].name" :text2="store.cards[0].race"></CardElement>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>