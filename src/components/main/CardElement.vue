<script>
export default {
    name: 'CardElement'
}
</script>

<template>
    <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
        <div class="card-element">
            <img src="/test-img.jpg" alt="card-img" class="w-100">
            <h5 class="text-white">Alien Ammonite</h5>
            <div>Alien</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

div.card-element {
    background-color: $primary-color;
}
</style>