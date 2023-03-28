<script>
export default {
    name: 'Selector'
}
</script>

<template>
    <div>
        <select class="form-select">
        <option selected>Open</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    </div>

</template>

<style lang="scss" scoped>
div {
    width: 150px;
    margin: 10px auto 0;
}
</style>