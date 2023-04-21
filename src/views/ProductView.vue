<script setup>
import ProductList from '../components/ProductList.vue';
</script>
<template>
    <div class="product-content">
        <div class="container">
            <div class="post-product-form">
                <div class="card">
                    <form class="upload-product-form" @submit="PostProduct" method="post">
                        <div class="card-header bg bg-primary text-white">
                            <div class="card-title">
                                <h3>Uploads Products</h3>
                            </div>
                        </div>
                        <div class="card-body">

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="pname">Name</label>
                                    <input type="text" name="pname" id="pname" class="form-control" v-model="Pproducts.Pname">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="category">Category</label>
                                    <v-select v-model="selectCategory" :options="optionsCategory" name="category"
                                        label="label" multiple />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="color">Color</label>
                                    <v-select v-model="selectColor" :options="optionsColor" name="color" label="label"
                                        multiple />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="pdescripts">Product Details</label>
                                    <textarea v-model="Pproducts.description" name="pdescripts" id="pdescripts" cols="30" class="form-control"></textarea>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="pdescripts text-primary">Product Image As Url</label>
                                    <textarea v-model="Pproducts.Pimage" name="pdescripts" id="pdescripts" cols="30" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-3">
                                    <label for="pprice">Product Cost ($)</label>
                                    <input type="number" class="form-control" v-model="Pproducts.Pprice">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="poffer">Discount (%)</label>
                                    <input type="number" class="form-control" v-model="Pproducts.Pdiscount">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="stock">Stock ( If 0 stock is out )</label>
                                    <input name="stock" type="number" class="form-control" v-model="Pproducts.stockState">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="prating">Product Rating</label>
                                    <select class="form-select" v-model="Pproducts.Prating">
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="btn-group col-md-2">
                                    <input type="submit" value="Post" class="form-control btn btn-primary text-white">
                                </div>
                                <div class="btn-group col-md-2">
                                    <input type="button" value="Clear" class="form-control btn btn-warning text-white">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ProductList/>
        </div>
    </div>
</template>
<script>
import vSelect from 'vue-select';
import axios from 'axios';
export default {
    data() {
        return {
            selectCategory: [],
            selectColor: [],
            optionsCategory: [
                { label: 'PC', value: 'pc' },
                { label: 'Desktop', value: 'desktop' },
                { label: 'Gaming', value: 'gaming' },
                { label: 'Laptop', value: 'laptop' },
                { label: 'Accessories', value: 'accessories' },
                { label: 'CPU', value: 'processors' },
                { label: 'VGA', value: 'videocard' },
                { label: 'Motherboard', value: 'motherboard' },
                { label: 'Ram', value: 'memoryram' },
                { label: 'Power supply', value: 'powersupply' },
                { label: 'HDD', value: 'harddriev' },
                { label: 'SSD', value: 'solidstatedrive' },
                { label: 'M.2', value: 'm2drive' },
                { label: 'Cases', value: 'pccase' },
                { label: 'Mouse', value: 'mouse' },
                { label: 'Keyboards', value: 'keyboards' },
                { label: 'Monitors', value: 'monitors' },
                { label: 'Webcame', value: 'webcame' },
                { label: 'Pendrives', value: 'pendrives' },
            ],
            optionsColor: [
                { label: 'Red', value: 'red' },
                { label: 'Blue', value: 'blue' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Green', value: 'green' },
                { label: 'Black', value: 'black' },
                { label: 'White', value: 'white' },
                { label: 'Pink', value: 'pink' },
                { label: 'Gold', value: '#ffd700' },
                { label: 'Purple', value: '#800080' },
                { label: 'GreenYellow', value: '#adff2f' },
                { label: 'Cyan', value: '#00ffff' },
                { label: 'LightSkyBlue', value: '#87cefa' },
                { label: 'SlateGray', value: '#708090' },
                { label: 'Chocolate', value: '#d2691e' },
                { label: 'Navy', value: '#000080' },
            ],
            Pproducts:  {
                Pname : null,
                category : null,
                description : null,
                color : null,
                Pimage : null,
                Pprice : null,
                Prating : null,
                Pdiscount : null,
                stockState : null,
                Pinteresting : null,
                updatedAt : null
            }
        };
    },
    methods : { 
        PostProduct(e) {
            this.Pproducts.category = this.selectCategory.map(object => object.value)
            this.Pproducts.color = this.selectColor.map(object => object.value)
            this.Pproducts.Pimage = this.Pproducts.Pimage.split(' ')
            this.Pproducts.updatedAt = new Date().toUTCString()
            axios.post('http://103.3.62.246:2938/api/products', this.Pproducts)
            .then((result)=> {
                console.warn(result)
            })
           
            e.preventDefault();
        }
    },
    components: {
        vSelect,
    }
};
</script>

<style scoped>
.product-content {
    padding-top: 80px;
}
</style>