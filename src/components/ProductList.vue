<script setup >
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);
const columns = [
  { data: 'pName' },
  { data: 'Pprice' },
  { data: 'Pdiscount' },
  { data: 'category' },
  { data: 'PstockState' },
  { data: 'updatedAt' },
];
</script>
<template>
    <notifications></notifications>
    <div class="product-list">
        <div class="card">
            <div class="card-header bg bg-success text-white">
                <div class="card-title ">
                    <h3>Product List</h3>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <DataTable :columns="columns" :data="tableData" class="table table-hover table-striped">
                        <thead class="text-primary">
                            <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>category</th>
                                    <th>Stock</th>
                                    <th>Last update</th>
                            </tr>
                        </thead>
                        <tfoot class="text-primary">
                            <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>category</th>
                                    <th>Stock</th>
                                    <th>Last update</th>
                            </tr>
                        </tfoot>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default  {
    data() {
        return { 
            tableData: [],
            columns: [
                { label: 'Name', field: 'pName' },
                { label: 'Price', field: 'Pprice' },
                { label: 'Discount', field: 'Pdiscount' },
                { label: 'Category', field: 'category' },
                { label: 'Stock', field: 'PstockState' },
                { label: 'Last update', field: 'updatedAt' }
            ]
        }
    },
    mounted() {
    axios.get('http://103.3.62.246:2938/api/products')
      .then(response => {
        this.tableData = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
}
</script>
<style scoped>
.product-list {
    padding: 20px 0px;
}
</style>