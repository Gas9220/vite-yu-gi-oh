<script>
export default {
    name: 'CardElement',
    props: {
        img: String,
        text1: String,
        text2: String
    }
}
</script>

<template>
    <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
        <div class="card-element">
            <img :src="img" alt="card-img" class="w-100">
            <h5 class="text-white">{{ text1 }}</h5>
            <div>{{ text2 }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

div.card-element {
    background-color: $primary-color;
    height: 100%;
}
</style>