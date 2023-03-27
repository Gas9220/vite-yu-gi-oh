<script>
export default {
    name: 'HeaderNav'
}
</script>

<template>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="/logo.png" alt="logo" class="d-inline-block align-bottom">
                <div class="align-bottom">Yu-Gi-Oh! API</div>
            </a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background-color: white;
    padding: 1rem;
    
    img {
    width: 9.375rem;
}
}
</style>