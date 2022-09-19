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
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  .logo-img {
    margin: auto 10px auto 0px;
    width: 2rem;
    height: 2rem;
  }
  .logo-text {
    font-size: 1.5rem;
    color: var(--main-color);
  }
}
header {
  position: relative;
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: center;

  i {
    color: var(--main-color);
  }

  /* nav */
  .nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: var(--body-color);
    top: 100%;
    transition: transform 0.3s ease-out;
    transform: scale(1, 0);
    transform-origin: top;
  }

  .item-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .items {
    width: 80%;
    margin: 0 auto;
    z-index: 5;
    background-color: var(--body-color);
  }

  .items li {
    border-bottom: 1px solid var(--second-color);
    height: 70px;
    line-height: 70px;
    text-align: center;

    a {
      color: var(--main-color);
    }
  }

  .navbar-tools {
    width: 80%;
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-around;

    .darkmode-input {
      display: none;
    }
  }

  /* burger menu */
  #navbar-toggle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7%;
    visibility: hidden;

    &:checked~.nav {
      display: block;
      transform: scale(1, 1);

      & .nav-item {
        opacity: 1;
        transition: opacity 0.3s east-out 0.15s;
      }
    }
  }

  .hamburger {
    position: absolute;
    left: 10%;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 375px) {
  header {
    .nav {
      all: unset;
      position: absolute;
      width: 80%;
      height: 70px;
    }

    .nav-item {
      opacity: unset;
    }

    .item-list {
      all: unset;
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .items {
      all: unset;
      width: 30%;
      display: flex;
      justify-content: space-between;
    }

    .items li {
      border-bottom: unset;
      overflow: hidden;
    }

    .navbar-tools {
      width: 15%;
      justify-content: space-between;
    }

    #navbar-toggle {
      display: none;
    }

    .hamburger {
      display: none;
    }
  }
}
</style>