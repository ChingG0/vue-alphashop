<template>
  <header>
      <a class="logo" href="#">
        <img :src="shop.image" alt="" class="logo-img" />
        <h2 class="logo-text">{{shop.name}}</h2>
      </a>
      <input type="checkbox" id="navbar-toggle" />
      <nav class="nav">
        <ul class="item-list">
          <ul class="items">
            <li class="nav-item" v-for="list in lists" :key="list.id"><a href="#">{{list.title}}</a></li>
          </ul>
          <div class="navbar-tools">
            <a href="#" class="search"><i class="fas fa-magnifying-glass"></i></a>
            <a href="#" class="myCart"><i class="fas fa-cart-shopping"></i></a>
            <div class="DnL-toggle">
              <label for="switch" class="darkmode-label"><i class="fa-solid fa-moon"></i></label>
              <input class="darkmode-input" type="checkbox" id="switch" name="mode">
            </div>
          </div>
        </ul>
      </nav>
      <label for="navbar-toggle" class="navbar-toggle-label hamburger">
        <span class="hamburger"><i class="fas fa-xl fa-bars"></i></span>
      </label>
  </header>
</template>
<script>
const dummyData = {
  alphaShop: {
    name: 'ALPHA Shop',
    image: 'https://i.ibb.co/PgqfxV4/Icon-1.png',
    navLists: [
      {
        id: 1,
        title: '男款'
      },
      {
        id: 2,
        title: '女款'
      },
      {
        id: 3,
        title: '最新消息'
      },
      {
        id: 4,
        title: '聯絡我們'
      },
      {
        id: 5,
        title: '客制商品'
      }
    ]
  }
}
export default {
  name: 'Navbar',
  data() {
    return {
      shop: dummyData.alphaShop,
      lists: dummyData.alphaShop.navLists
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/navbar.scss';
@import '../assets/scss/logo.scss';
</style>