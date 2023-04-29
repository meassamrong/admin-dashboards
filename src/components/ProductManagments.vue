
<template>
    <div class="post-product-form">
        <div class="card">
            <notifications animation-type="velocity" position="top center" width="50%" class="my-notification"/>
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
                            <v-select v-model="selectCategory" :options="optionsCategory" name="category" label="label"
                                multiple />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="color">Color</label>
                            <v-select v-model="selectColor" :options="optionsColor" name="color" label="label" multiple />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="pdescripts">Product Details</label>
                            <textarea v-model="Pproducts.description" name="pdescripts" id="pdescripts" cols="30"
                                class="form-control"></textarea>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="pdescripts text-primary">Product Image As Url</label>
                            <textarea v-model="Pproducts.Pimage" name="pdescripts" id="pdescripts" cols="30"
                                class="form-control"></textarea>
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
                            <!-- <input type="button" value="Clear" @click="resetValue" class="form-control btn btn-warning text-white"> -->
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Product List -->
    <div class="product-list">
        <div class="card">
            <div class="card-header bg bg-success text-white">
                <div class="card-title ">
                    <button @click="deleteProduct('asmdklasdn')">Test</button>
                    <h3>Product List</h3>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <DataTable :columns="columns" :data="tableData" class="table table-hover table-striped">
                        <thead class="text-primary">
                            <tr>
                                <th>Name</th>
                                <th>Price ($)</th>
                                <th>Discount (%)</th>
                                <th>category</th>
                                <th>Stock</th>
                                <th>Last update</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot class="text-primary">
                            <tr>
                                <th>Name</th>
                                <th>Price ($)</th>
                                <th>Discount (%)</th>
                                <th>category</th>
                                <th>Stock</th>
                                <th>Last update</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
    <!-- confirm delete dialog form -->
    <GDialog v-model="dialogState" max-width="500">
        <div class="card">
            <div class="card-header">
                <div class="card-title">DELETE CONFIRM !</div>
            </div>
            <div class="card-body">
                <p>Sure ? You want delete the product !</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" @click="dialogState = false">Cancel</button>
                <button class="btn btn-danger">OK</button>
            </div>
        </div>
    </GDialog>
</template>
<script>
import $ from 'jquery';
import { h } from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);
import vSelect from 'vue-select';
import axios from 'axios';
export default {
    data() {
        return {
            dialogState : false,
            selectCategory: [],
            selectColor: [],
            tableData: [],
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
                { label: 'Headset', value: 'headset' }
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
            Pproducts: {
                Pname: null,
                category: null,
                description: null,
                color: null,
                Pimage: null,
                Pprice: null,
                Prating: null,
                Pdiscount: null,
                stockState: null,
                updatedAt: null
            },
            columns: [
                { data: 'pName' },
                { data: 'Pprice' },
                { data: 'Pdiscount' },
                { data: 'category' },
                { data: 'PstockState' },
                { data: 'updatedAt' },
                {
                    label: 'Actions',
                    field: 'actions',
                    orderable: false,
                    searchable: false,
                    className: 'text-center',
                    render: (data, type, row, meta) => {
                        return `
                            <div class="btn-group" role="group" aria-label="Actions">
                                
                                <button type="button" class="btn btn-sm btn-warning edit-button" data-id="${row._id}"><i class="bi bi-pencil-square"></i></button>
                                <button type="button" class="btn btn-sm btn-danger delete-button" data-id="${row._id}"><i class="bi bi-trash"></i></button>
                            </div>
                        `;
                    },
                }
            ]
        }
    },
    methods: {
        PostProduct(e) {
            this.Pproducts.category = this.selectCategory.map(object => object.value)
            this.Pproducts.color = this.selectColor.map(object => object.value)
            this.Pproducts.Pimage = this.Pproducts.Pimage.split(' ')
            this.Pproducts.updatedAt = new Date().toUTCString()
            axios.post('http://127.0.0.1:5000/api/products', this.Pproducts)
                        .then((result) => {
                            console.warn(result);
                            this.getProduct()
                            this.$notify({
                                title: 'Success',
                                text: 'Data sent successfully',
                                type: 'success'
                            })
                            this.Pproducts.Pname = null
                            this.Pproducts.description = null
                            this.Pproducts.Pimage = null
                            this.Pproducts.Pprice = null
                            this.Pproducts.Prating = null
                            this.Pproducts.Pdiscount = null
                            this.Pproducts.stockState = null
                        })
                        .catch((error) => {
                            console.log(error)
                            this.$notify({
                                title: 'Error !',
                                text: 'Failed to send data',
                                type: 'error'
                            })
                        })
            e.preventDefault();
        },
        getProduct() {
        axios.get('http://127.0.0.1:5000/api/products')
                .then(response => {
                this.tableData = response.data;
            })
            .catch(error => {
                    console.log(error);
            })
        },
        editProduct(productId) {
            // Add logic to edit the selected product
            console.warn(`YOur edit product ${productId}`)
        },
        deleteProduct(productId) {
            console.log(productId)
            this.dialogState = true
        },
        
    },
    mounted() {
        this.getProduct();
        this.$nextTick(function () {
            const table = $('.table').DataTable();
            $('.table tbody').on('click', '.edit-button', function () {
                const id = $(this).data('id');
                // handle edit action here
            });
            $('.table tbody').on('click', '.delete-button', function(e){
                const id = $(this).data('id');
                console.warn(id);
                
            });
        });
    },
    components: {
        vSelect,
        DataTable
    },
   
}
</script>
<style scoped>
.product-list {
    padding: 20px 0px;
}

</style>