<template>
  <div>
    <h2 class="checkout-title">結帳</h2>
    
    <div class="main-container">
      <div class="left-container checkout">
        <StepControl />
        <Form />
      </div>
      <ShopCart />
      <div id="btn-control" class="control-panel d-flex justify-content-between">
        <button disabled class="btn btn-outline hidden">上一步</button>
        <button class="btn btn-primary">下一步</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import StepControl from '../components/StepControl.vue'
import ShopCart from '../components/ShopCart.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Shop',
  components: {
    Form,
    StepControl,
    ShopCart,
    Footer
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/Shop.scss';
@import '../assets/scss/color.css';
@import '../assets/scss/buttonControl.scss';
@import '../assets/scss/mainContainer.scss';
</style>