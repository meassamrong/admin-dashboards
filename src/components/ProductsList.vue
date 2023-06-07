<template>
    <div class="card" style="padding: 10px;">
        <table id="data-table" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price $</th>
                    <th>Discount %</th>
                    <th>Stock State</th>
                    <th>Category</th>
                    <th>Last update</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in   data  " :key="item.id">
                    <td>{{ item.pName }}</td>
                    <td>{{ item.Pprice }}$</td>
                    <td>{{ item.Pdiscount }}%</td>
                    <td>{{ item.PstockState }}</td>
                    <td>{{ item.category.toString(' ') }}</td>
                    <td>{{ item.updatedAt }}</td>
                    <td>
                        <button @click="SeleteUpdateProduct(item)" class="btn btn-warning"
                            style="margin-right: 5px;">Edit</button>
                        <button @click="; `${(confirmDeleteProducts = true)} ${ConfirmDelete(item)}`"
                            class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Confirm Delete Products popup -->
    <GDialog v-if=" DeleteProduct " width="25%" v-model=" confirmDeleteProducts ">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="title">
                        <h3 class="text-danger text-center">
                            Delete Warning <i class="bi bi-exclamation-diamond"></i>
                        </h3>
                    </div>
                    <div class="closeForm">
                        <h3 class="col-1 text-center" @click=" confirmDeleteProducts = false "
                            style="cursor: pointer; position: absolute; right: 0px; top: -50px;">
                            <i class="bi bi-x-lg"></i>
                        </h3>
                    </div>
                </div><br>
                <p class="text-center">Do you want to Delete <b>" {{ DeleteProduct.pName }} "</b></p>
            </div>
            <div class="card-footer text-end">
                <div class="btn btn-danger" @click=" deleteProducts(DeleteProduct._id) ">
                    YES
                </div>
            </div>
        </div>
    </GDialog>

    <!--  Update Products Form-->
    <GDialog v-model=" UpdateProductForm " v-if=" updateProducts " height="auto" width="50%">
        <form @submit.prevent="SendupdateProducts(updateProducts._id)">
            <div class="uppdate-products" style="padding: 10px;">
                <div class="container">
                    <div class="row" style="padding: 15px 0px;">
                        <div class="col-6">
                            <h3>Update Products</h3>
                        </div>
                        <div class="col-5"></div>
                        <div class="col-1 text-end">
                            <h3 @click=" UpdateProductForm = false " style="cursor: pointer;" class="text-end">
                                <i class="bi bi-x-circle"></i>
                            </h3>
                        </div>
                    </div><br>
                    <div class="card" style="padding: 10px;">
                        <div class="row">
                            <div class="form-group col-md-4">
                                <label for="pname" class="form-label">Name</label>
                                <input type="text" name="pname" class="form-control" v-model=" updateProducts.pName "
                                    required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="category" class="form-label">Category</label>
                                <input type="text" name="category" class="form-control" v-model=" updateProducts.category "
                                    disabled>

                            </div>
                            <div class="form-group col-md-4">
                                <label for="color" class="form-label">Color</label>
                                <input type="text" name="color" class="form-control" v-model=" updateProducts.color "
                                    disabled>
                            </div>
                        </div><br>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="productsdetail" class="form-label">Product Details</label>
                                <textarea name="productsdetail" class="form-control" id="productsdetail" required
                                    v-model=" updateProducts.description " style="height:150px;">
                                </textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="productsdetail" class="form-label">Product Details</label>
                                <textarea name="productsdetail" class="form-control" id="productsdetail" required
                                    v-model=" updateProducts.Pimage" style="height:150px;">
                                </textarea>
                            </div>
                        </div><br>
                        <div class="row">
                            <div class="form-group col-md-3">
                                <label for="pprices" class="form-label">Product Cost ($)</label>
                                <input type="number" name="pprices" class="form-control" v-model=" updateProducts.Pprice"
                                    required>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="pdiscount" class="form-label">Discount (%)</label>
                                <input type="number" name="pdiscount" class="form-control"
                                    v-model="updateProducts.Pdiscount " required>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="pstockstate" class="form-label">Stock ( If 0 stock is out )</label>
                                <input type="number" name="pstockstate" class="form-control"
                                    v-model=" updateProducts.PstockState " required>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="prating" class="form-label">Product Rating</label>
                                <select class="form-select" v-model=" updateProducts.Prating " required>
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
                        </div><br>
                    </div>
                    <div class="card-footer " style="padding: 10px 0px;">
                        <div class="row">
                            <div class="text-end">
                                <input type="submit" value="Update" class="btn btn-warning col-2 text-white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </GDialog>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import 'bootstrap';
import 'datatables.net';
import { ref } from 'vue'
import { GDialog } from 'gitart-vue-dialog';
const apiEndPoint = 'http://localhost:5000/api/products'
export default {
    data() {
        return {
            data: [],
            dataTable: null,
            DeleteProduct: null,
            updateProducts: null,
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
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get(apiEndPoint)
                .then(response => {
                    this.data = response.data;
                    this.initializeDataTable();
                })
                .catch(error => {
                    console.error(error);
                });
            this.$eventBus.on("getData", (getData) => {
                this.getData();
            });
        },
        initializeDataTable() {
            this.$nextTick(() => {
                this.dataTable = $("#data-table").DataTable();
            });
        },
        SeleteUpdateProduct(item) {
            this.updateProducts = item
            this.UpdateProductForm = true;
        },
        // Update Product Data
        SendupdateProducts(Pid){
            this.updateProducts.Pimage = this.updateProducts.Pimage.split(' ')
            this.updateProducts.updatedAt = new Date().toUTCString()
            axios.patch(apiEndPoint + '/' + Pid, this.updateProducts)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
            // console.log(this.updateProducts)
            // this.Pproducts.Pimage = this.Pproducts.Pimage.split(' ')
            // this.Pproducts.updatedAt = new Date().toUTCString()
            console.log(Pid)
        },
        ConfirmDelete(PItem) {
            this.DeleteProduct = PItem;
        },
        deleteProducts(id) {
            axios.delete(apiEndPoint + "/" + id)
                .then(response => {
                    this.getData();
                    this.confirmDeleteProducts = false;
                    this.initializeDataTable();
                    this.$notify({
                        title: "<i class=\"bi bi-trash3\"></i> Deleted",
                        text: response.data.message,
                        type: "warn",
                    });
                })
                .catch(error => {
                    this.$notify({
                        title: "Error deleting data",
                        text: error,
                        type: "error"
                    });
                });
        }
    },
    setup() {
        const confirmDeleteProducts = ref(false);
        const UpdateProductForm = ref(false);
        return {
            confirmDeleteProducts,
            UpdateProductForm
        };
    },
    beforeDestroy() {
        if (this.dataTable !== null) {
            this.dataTable.destroy();
            this.dataTable = null;
        }
    },
    components: { GDialog }
};
</script>
  
<style scoped></style>
  