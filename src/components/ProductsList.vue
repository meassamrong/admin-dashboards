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
                <tr v-for="item in  data " :key="item.id">
                    <td>{{ item.pName }}</td>
                    <td>{{ item.Pprice }}$</td>
                    <td>{{ item.Pdiscount }}%</td>
                    <td>{{ item.PstockState }}</td>
                    <td>{{ item.category.toString(' ') }}</td>
                    <td>{{ item.updatedAt }}</td>
                    <td>
                        <button @click="editItem(item)" class="btn btn-warning" style="margin-right: 5px;">Edit</button>
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
            <div class="closeForm text-end text-primary" style="padding: 10px 10px 0px 0px; cursor: pointer;"
                @click=" confirmDeleteProducts = false ">
                <h2> <i class="bi bi-x-lg"></i></h2>
            </div>
            <div class="card-body">
                <h3 class="text-danger text-center" style="padding-bottom: 10px;">Delete Warning <i
                        class="bi bi-exclamation-diamond"></i></h3>
                <p class="text-center">Do you want to Delete <b>" {{DeleteProduct.pName}} "</b></p>
            </div>
            <div class="card-footer text-end">
                <div class="btn btn-danger" @click="deleteProducts(DeleteProduct._id)">
                    YES
                </div>
            </div>
        </div>
    </GDialog>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import 'bootstrap';
import 'datatables.net';
import { ref } from 'vue'
const apiEndPoint = 'http://localhost:5000/api/products'
export default {
    data() {
        return {
            data: [],
            dataTable: null,
            DeleteProduct: null,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get(apiEndPoint)
                .then(response => {
                    this.data = response.data;
                    this.initializeDataTable();
                })
                .catch(error => {
                    console.error(error);
                });
                this.$eventBus.on('getData', (getData)=>{
                    this.getData();
                })
        },
        initializeDataTable() {
            this.$nextTick(() => {
                this.dataTable = $('#data-table').DataTable();
            });
        },
        editItem(item) {
            console.log(item._id);
        },
        deleteItem(item) {
            // Handle deletion logic for the item
        },
        ConfirmDelete(PItem) {
            this.DeleteProduct = PItem
           
        },
        deleteProducts(id) {
            axios.delete(apiEndPoint+'/'+id)
                .then(response => {
                    this.getData();
                    this.confirmDeleteProducts = false;
                    this.initializeDataTable();
                    this.$notify({
                        title: 'Successfully deleted!',
                        text: 'you was successfully deleted',
                        type: 'success'
                    })
                })
                .catch(error => {
                    // Handle error
                    console.error('Error deleting data:', error);
                    this.$notify({
                        title: 'Error deleting data',
                        text: error,
                        type: 'error'
                    })
            });

        }
    },
    setup() {
        const confirmDeleteProducts = ref(false)
        return {
            confirmDeleteProducts
        }
    },
    beforeDestroy() {
        if (this.dataTable !== null) {
            this.dataTable.destroy();
            this.dataTable = null;
        }
    }
};
</script>
  
<style scoped></style>
  