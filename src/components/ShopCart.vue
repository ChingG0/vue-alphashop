<template>
  <div class="right-container cart">
    <div class="cart-container">
      <h2>購物籃</h2>
      <div class="cart-row" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="">
        <div class="cart-info">
          <div class="cart-item">
            <h3>{{product.name}}</h3>
            <h4 class="item-price">{{product.total | tenPercentile}}</h4>
          </div>
          <div class="item-amount"><i class="fa-solid fa-minus"
              @click.prevent.stop="minusQuan(product)"></i>{{product.quantity}}<i class="fa-solid fa-plus"
              @click.prevent.stop="plusQuan(product)"></i></div>
        </div>
      </div>
      <div class="cart-row">
        <div class="shipping">
          <h4>運費</h4>
          <h4 class="fee">{{deliveryFee}}</h4>
        </div>
      </div>
      <div class="cart-row">
        <div class="total">
          <h4>小計</h4>
          <h4 class="total-price">{{total}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  props: {
    initProducts: {
      type: Array,
      require: true
    },
    initFee: {
      value: [Number, String],
    },
    initTotal: {
      type: Number,
    }
  },
  data() {
    return {
      products: [],
      deliveryFee: this.initFee? this.initFee : 0,
      total: 0
    }
  },
  created() {
    this.fetchData()
    this.products.forEach(product=>product.total = product.price*product.quantity)
  },
  mounted() {
    PubSub.subscribe('deliveryFee', (msg, fee) => {
      this.deliveryFee = fee
    })
  },
  methods: {
    fetchData() {
      this.products = this.initProducts
      this.total = this.initTotal
    },
    minusQuan(product) {
      product.quantity > 0 ? product.quantity-- : 0
      product.total = product.price * product.quantity
    },
    plusQuan(product) {
      product.quantity++
      product.total = product.price * product.quantity
    },
    calcTotal(){
      this.total = this.products.map(product=>product.total).reduce((acc,current)=>{return acc+current})+Number(this.deliveryFee)
    },
    saveProducts(){
      localStorage.setItem('products',JSON.stringify(this.products))
      localStorage.setItem('deliveryFee',JSON.stringify(this.deliveryFee))
      localStorage.setItem('total',JSON.stringify(this.total))
    }
  },
  watch: {
    products: {
      handler: function () {
        this.calcTotal()
        this.saveProducts()
      },
      deep: true
    },
    deliveryFee: {
      handler: function () {
        this.calcTotal()
        this.saveProducts()
      },
      deep: true
    }
  },
  filters: {
    tenPercentile(n) {
      return `$${n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/CheckoutStyle/rightContainer.scss'
</style>
