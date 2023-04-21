<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
<div class="header-content bg bg-success">
    <div class="container">
    
        <div class="header-nav text-white">
            <ul>
                <li><a href="#"><i class="bi bi-person-circle"></i></a></li>
                <li><a href="#"><i class="bi bi-bell-fill"></i></a></li>
                <li><a href="#"><i class="bi bi-gear-wide-connected"></i></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="menu-side" :class="{ 'responsive': isResponsive }">
        <div class="logo" :class="{ 'responsiveLogo': isResponsive }" >
            <h2 :class="{ 'reverRespsonsiveLogo': isResponsive }">J'CORP DEV</h2>
        </div>
        <div class="menu-btn-interaction" :class="{ 'responsivebtn': isResponsive }" @click="toggleResponsive">
                <i class="bi bi-caret-left-fill" ></i>
            </div>
        <div class="menu-items" :class="{ 'responsiveMnu': isResponsive }">
            <ul>
                <li><a href=""><i class="bi bi-speedometer2"></i> <span>Dashboard</span></a></li>
                <li><RouterLink to="/products"><i class="bi bi-diagram-3-fill"></i> <span>Products</span></RouterLink></li>
                <li><a href=""><i class="bi bi-bag-fill"></i> <span>Order</span></a></li>
                <li><a href=""><i class="bi bi-pie-chart-fill"></i> <span>Analytics</span></a></li>
                <li><a href=""><i class="bi bi-people-fill"></i> <span>Customer List</span></a></li>
            </ul>
        </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      isResponsive: false,
    };
  },
  methods: {
    toggleResponsive() {
      this.isResponsive = !this.isResponsive;
    },
  },
};
</script>
<style scoped>

/* Menu side */
.menu-side {
    position: fixed;
    width: 15%;
    height: 100%;
    background: #fff;
    overflow-x: hidden;
    transition: width 0.3s ease-out;
  z-index: 1000;
}
.menu-side.responsive {
  width: 5%;
}
.menu-side .logo {
    text-align: center;
    padding: 10px 0px;
    color: rgb(0, 138, 16);
    font-size: 35px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.reverRespsonsiveLogo {
    transition: all 2500ms linear;
    animation: reverRespsonsiveLogo 300ms linear forwards;

}
@keyframes reverRespsonsiveLogo {
    from {
        font-size: 15px;
    }
    to {
        font-size: 35px;
    }
}
.logo.responsiveLogo h2{
    animation: logoResponsiveLogo 300ms linear forwards;

}
@keyframes logoResponsiveLogo {
    from {
        font-size: 35px;
    }
    to {
        font-size: 15px;
    }
}
.menu-btn-interaction{
    float: right;
    color: rgb(0, 138, 16);
    font-size: 25px;
    background-color: rgba(174, 170, 170, 0.437);
    padding: 0px 10px;
    cursor: pointer;
    border-radius: 5px;
    z-index: 99;
}
.menu-btn-interaction:hover {
    background-color:rgba(0, 138, 16, 0.386);
}
.menu-side .menu-items ul{
    margin: 0px;
    padding: 0px;
    padding-top: 10px;
    list-style-type: none;
    font-size: 0px;
    border-top: solid 1px rgba(0, 138, 16, 0.363);
}
 
.menu-side .menu-items ul li a {
    font-size: 20px;
    text-decoration: none;
    padding: 5px 20px;
    display: inline-block;
    width: 100%;
    transition: all 0.3s ease-in-out;
    color : var(--font-menu-grycolor);
    border-radius: 5px;
    
}
.menu-side .menu-items ul li a span {
    padding: 0px 10px;
    transition: width 0.5s linear;
   
}
.menu-side .menu-items ul li a:hover {
    background-color:rgba(0, 138, 16, 0.386);
    transform: translateX(30px);
}
.menu-items.responsiveMnu  ul li a {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
}
.menu-items.responsiveMnu  ul li a span{
    transition: width 0.5s linear;
   visibility: hidden;
   font-size:0px
}
.menu-items.responsiveMnu  ul li a:hover {
    background-color:rgba(0, 138, 16, 0.386);
    transform: translateX(0px);
}

.menu-btn-interaction.responsivebtn {
-webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
/* Close Menu */
.header-content {
    padding: 5px 0px;
    position: fixed;
    width: 100%;
    height: 60px;
}
.header-nav {
    float: right;
  
}
.header-nav ul{
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    font-size: 0px;
}
.header-nav ul li {
    display: inline-block;
    padding: 5px 10px;
}
.header-nav ul li a {
    font-size: 25px;
    color: #ffff;
}
</style>