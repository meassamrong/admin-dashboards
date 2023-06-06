<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="navigation_headers">
        <div class="container">
            <div class="row">
                <div class="menu_btn col-6">
                    <div class="row">
                        <div class="logo">
                            <h4>J'Corp-Shop</h4>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="user-interation col-4">
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-decoration-none text-white">
                                <h4><i class="bi bi-bell"></i></h4>
                            </a></li>
                        <li><a href="#" class="text-decoration-none text-white">
                                <h4><i class="bi bi-envelope"></i></h4>
                            </a></li>
                        <li><a href="#" class="text-decoration-none text-white">
                                <h4>Sample name</h4>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Side Menu -->
    <div class="menu-side">
        <ul>
            <li><a href="#"><i class="bi bi-pie-chart-fill"></i></a></li>
            <li><RouterLink to="/"><i class="bi bi-house"></i></RouterLink></li>
            <li><RouterLink to="/products"><i class="bi bi-clipboard-plus"></i></RouterLink></li>
        </ul>
    </div>
</template>
<style scoped>
.navigation_headers {
    width: 100%;
    height: auto;
    padding: 10px 0px;
    background-color: var(--dark-color-light-1);
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 9;
}
.logo h4 {
    color: #fff !important;
    font-family: goodtimes;
}

.user-interation {
    text-align: right;
}

.user-interation ul {
    padding: 0px;
    margin: 0px;
    font-size: 0px;
}

.user-interation ul li {
    display: inline-block;
    padding: 0px 15px;
}

.user-interation ul li:nth-last-child(odd) {
    padding: 0px;
}

.user-interation ul li a {
    transition: all 0.5s;
}

.user-interation ul li a:hover {
    color: aquamarine !important;
}

.user-interation ul li a h4 {
    padding: 0px;
    margin: 0px;
}

.user_img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.user_img img {
    height: 30px;
    width: 30px;
}

/* Side Menu */
.menu-side {
    position: fixed;
    z-index: 1;
    width: auto;
    height: 80vh;
    background-color: var(--green-color-light-1);
    top: 50%;
    transform: translate(0%, -50%);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-side ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    font-size: 0px;
}

.menu-side ul li {
    padding: 10px;
}

.menu-side ul li a {
    font-size: 25px !important;
    color: #fff;
    transition: all 0.2s;
    padding: 8px;
    border-radius: 8px;
}

.menu-side ul li a:hover {
    color: #edddd4;
    background-color: #283d3d;
}
</style>