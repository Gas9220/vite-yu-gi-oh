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
    <div class="container bg-white mt-3">
        <div class="row">
            <div class="col p-5">
                <CardElement></CardElement>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>