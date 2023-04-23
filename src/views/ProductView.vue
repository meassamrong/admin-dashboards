<script setup>
import ProductList from '../components/ProductList.vue';
import PostProduct from '../components/PostProduct.vue';
</script>
<template>
    <div class="product-content">
        <div class="container">
            <PostProduct/>
            <ProductList/>
        </div>
    </div>
</template>
<style scoped>
.product-content {
    padding-top: 80px;
}
</style>