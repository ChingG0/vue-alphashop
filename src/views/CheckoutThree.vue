<template>
  <div>
    <CheckOutTitle />
    <div class="main-container">
      <div class="left-container checkout">
        <StepControlThree />
        <CheckoutPayment/>
      </div>
      <ShopCart :initProducts = "products" :initFee = "deliveryFee" :initTotal="total"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import CheckOutTitle from "../components/CheckOutTitle.vue";
import ShopCart from "../components/ShopCart.vue";
import Footer from "../components/Footer.vue";
import StepControlThree from "../components/StepControlThree.vue";
import CheckoutPayment from "../components/CheckoutThree/CheckoutPayment.vue";
export default {
  components: {
    CheckOutTitle,
    ShopCart,
    Footer,
    StepControlThree,
    CheckoutPayment
  },
  data() {
    return {
      products: [],
      deliveryFee: 0,
      total: 0
    }
  },
  created(){
      this.products = JSON.parse(localStorage.getItem('products'))
      this.deliveryFee = JSON.parse(localStorage.getItem('deliveryFee'))
      this.total =JSON.parse(localStorage.getItem('total'))
      this.products.forEach(product=>product.total = product.price*product.quantity)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/reset.scss";
@import "../assets/scss/color.css";
@import "../assets/scss/CheckoutStyle/mainContainer.scss";
@import "../assets/scss/CheckoutStyle/leftContainer.scss";
@import "../assets/scss/footer.scss";
</style>