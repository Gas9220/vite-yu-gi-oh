<script>
import CardElement from './CardElement.vue';

export default {
    name: 'AppMain',
    components: {
        CardElement
    }
}
</script>

<template>
    <div class="container bg-white mt-5">
        <div class="row p-2">
            <div class="col-12">
                <div class="p-2 bg-black text-white">Found 39 cards</div>
            </div>
                <CardElement></CardElement>
                <CardElement></CardElement>
                <CardElement></CardElement>
                <CardElement></CardElement>
                <CardElement></CardElement>
                <CardElement></CardElement>
                <CardElement></CardElement>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>