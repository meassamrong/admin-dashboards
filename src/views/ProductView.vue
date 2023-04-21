<template>
    <div class="product-content">
        <div class="container">
            <div class="post-product-form">
                <div class="card">
                    <form class="upload-product-form">
                        <div class="card-header bg bg-primary text-white">
                            <div class="card-title">
                                <h3>Uploads Products</h3>
                            </div>
                        </div>
                        <div class="card-body">

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="pname">Name</label>
                                    <input type="text" name="pname" id="pname" class="form-control">
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
                                    <textarea name="pdescripts" id="pdescripts" cols="30" class="form-control"></textarea>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="pdescripts text-primary">Product Image As Url</label>
                                    <textarea name="pdescripts" id="pdescripts" cols="30" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-3">
                                    <label for="pprice">Product Cost ($)</label>
                                    <input type="number" value="0" class="form-control">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="poffer">Discount (%)</label>
                                    <input type="number" value="0" class="form-control">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="stock">Stock ( If 0 stock is out )</label>
                                    <input name="stock" type="number" value="0" class="form-control">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="prating">Product Rating</label>
                                    <select class="form-select">
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
            <div class="product-list">
                <div class="card">
                    <div class="card-header bg bg-success text-white">
                        <div class="card-title ">
                            <h3>Product Posted</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in products" :key="product.id">
                                    <td>{{ product._id }}</td>
                                    <td>{{ product.pName }}</td>
                                    <td>{{ product.Pprice }}</td>
                                    <td>
                                        <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                                        <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vSelect from 'vue-select';
import { ref } from 'vue'
import axios from 'axios'
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
        };
    },
    components: {
        vSelect,
    },
    setup() {
    const products = ref([])

    // Fetch data from the API
    axios.get('http://103.3.62.246:2938/api/products')
      .then(response => {
        products.value = response.data
      })
      .catch(error => {
        console.log(error)
      })

    // Edit a product
    const editProduct = (product) => {
      // Implement your edit logic here
      console.log(`Editing product with ID ${product._id}`)
    }

    // Delete a product
    const deleteProduct = (product) => {
      // Implement your delete logic here
      console.log(`Deleting product with ID ${product._id}`)
    }

    return {
      products,
      editProduct,
      deleteProduct
    }
  }
};
</script>

<style scoped>
.product-content {
    padding-top: 80px;
}
</style>