<script setup>
import PostProducts from '../components/PostProducts.vue';
</script>
<template>
    <notifications animation-type="velocity" position="top right" width="30%" class="my-notification" />
    <div class="product-menagerments">
        <div class="container">
            <div class="products-section">
                <div class="row">
                    <div class="products-titles col-6">
                        <h2 class="text-primary"><b><i class="bi bi-file-earmark-text"></i> PRODUCT MANAGERMENTS</b></h2>
                    </div>
                    <div class="add-products text-end col-6">
                        <button class="btn btn-success" @click="addProductForm = true"><i class="bi bi-plus-circle-fill"></i> Add Product</button>
                    </div>
                </div><br>
                <!-- Product-List -->
            <data-table-component></data-table-component>
            </div>
        </div>
    </div>
        <GDialog v-model="addProductForm" height="auto" width="50%" >
            <div class="container">
                <div class="row" style="padding: 15px 0px;">
                    <div class="text-primary col-6">
                        <h3><b>POST NEW PRODUCTS</b></h3>
                    </div>
                    <div class="close-button col-6 text-end">
                            <button @click="addProductForm = false" class="btn btn-danger"><i class="bi bi-x-circle"></i></button>
                    </div>
                </div>
            </div>
            <PostProducts/>
            
        </GDialog>
</template>
<script>

export default {
  data(){
    return {
        addProductForm : false
    }
  },
}
</script>
<style scoped>
.product-menagerments {
    padding-top: 80px;
}
.products-section {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
}
.products-titles  {
    padding-top: 0px;
}
.products-titles h4 {
    margin: 0px;
    color: var(--green-color-light-1);
}

/* Search */
.searchBox {
    background-color: rgba(50, 94, 94, 0.192);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 35px;
}
.searchBox .search-input {
    display: inline-block;
    width: 90%;
    height: 100%;
}
.searchBox .search-input input{
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(127, 255, 212, 0);
    font-size: 20px;
}
.searchBox .search-input input:focus {
    outline: none;
}
.searchBox .searc-button a{
    font-size: 20px;
}
</style>