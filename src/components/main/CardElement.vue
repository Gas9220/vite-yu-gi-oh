<script>
export default {
    name: 'CardElement'
}
</script>

<template>
    <div class="card-element p-2">
        <img src="/test-img.jpg" alt="card-img" class="w-100">
        <h5 class="text-white">Alien Ammonite</h5>
        <div>Alien</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

div.card-element {
    width: 150px;
    background-color: $primary-color;
}
</style>