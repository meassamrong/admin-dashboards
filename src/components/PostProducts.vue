<template>
     <notifications animation-type="velocity" position="top center" width="50%" class="my-notification" />
    <div class="container" style="padding-bottom: 50px;">
        <form class="upload-product-form" @submit="PostProduct" method="post">
            <div class="card" >
                <div class="card-body">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="pname" class="form-label">Name</label>
                            <input type="text" name="pname" id="pname" class="form-control" v-model="Pproducts.Pname" required>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="category"  class="form-label">Category</label>
                            <v-select v-model="selectCategory" :options="optionsCategory" name="category" label="label" required multiple />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="color"  class="form-label">Color</label>
                            <v-select v-model="selectColor" :options="optionsColor" name="color" label="label" required multiple />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="pdescripts" class="form-label">Product Details</label>
                            <textarea v-model="Pproducts.description" name="pdescripts" id="pdescripts" cols="30" class="form-control" required></textarea>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="pdescripts text-primary">Product Image As Url</label>
                            <textarea v-model="Pproducts.Pimage" name="pdescripts" id="pdescripts" cols="30" class="form-control" required></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-3">
                            <label for="pprice" class="form-label">Product Cost ($)</label>
                            <input type="number" class="form-control" v-model="Pproducts.Pprice" required>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="poffer" class="form-label">Discount (%)</label>
                            <input type="number" class="form-control" v-model="Pproducts.Pdiscount" required>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="stock" class="form-label">Stock ( If 0 stock is out )</label>
                            <input name="stock" type="number" class="form-control" v-model="Pproducts.stockState" required>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="prating" class="form-label">Product Rating</label>
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
            </div>
            <div class="card-footer " style="padding: 10px 0px;">
                <div class="row">
                    <div class="text-end">
                        <input type="submit" value="Post" class="btn btn-primary col-2 text-white">
                    </div>      
                </div>
            </div>
        </form>
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
                    this.$notify({
                        title: 'Success',
                        text: 'Data sent successfully',
                        type: 'success'
                    })
                    this.$eventBus.emit('getData', this.getData);
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
        }
    },
    components: {
        vSelect,
    },
}
</script>

