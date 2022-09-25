<template>
  <div>
    <CheckOutTitle />
    <div class="main-container">
      <div class="left-container checkout">
        <StepControlOne />
        <CheckoutAddress/>
      </div>
      <ShopCart :initProducts="products" :initTotal="total" :initFee = "deliveryFee"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import CheckOutTitle from "../components/CheckOutTitle.vue";
import ShopCart from "../components/ShopCart.vue";
import Footer from "../components/Footer.vue";
import StepControlOne from "../components/StepControlOne.vue";
import CheckoutAddress from "../components/CheckoutOne/CheckoutAddress.vue";

const dummyData = {
  products: [
    {
      id: 1,
      name: '破壞補丁修身',
      image: "https://s3-alpha-sig.figma.com/img/15f2/959d/447065f70fcdd4bf7fef35c5a33a00fa?Expires=1664755200&Signature=ITT~OkUIzfyMF-gkIuw0RqMwCVex6henGjFbmwOIeRjz8q-QM1pkHkBaOho~vYbL5czakoqtvIjY6sn5irGBTfMKvU5Yf-4zazvMk2ceq16m9FwzC-D9lDYhPswecXZxHUSn5RPbUfXlA-5J4bS1pelnDGSsYiUkw~t8g5XTkFg09PCxJginTgvgAlNRnTf~T8HVsuxpIkz8v~u3YY98ElSvKeLWb891l~woOJXMTlTC4efd8AgkyP4QFpuPaaAcq09LSbNjuA6Xak7nXDYHRIziz7RK2qM6mee6dmw0YKAalT0kjjqxbJ41Zt9kVGixUJ2JIuhtxQjfLkp-HTDgdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      price: 3999,
      quantity: 1,
      total: 0,
    },
    {
      id: 2,
      name: '刷色直筒牛仔',
      image: "https://s3-alpha-sig.figma.com/img/4d21/00d2/8b521840bb4e7237b342e63cb39c6a72?Expires=1664755200&Signature=DQDV8Eg6ukDDIm3l3A7V5mHqHBGliTx-p6-YyZobEoDNh1ukK1YQIyPhtsEJn3wgaP7cxKIByQtSU~~Zjg6f~BVZErq44F8nG7iDU08Of42mamyLbCV-NpGf326nRhAzEi9PjC68aDjpkiQ3g-fpl3xuaa1D4iemTT~oVEtW8SpNL7Uyt5-MEoXunJcPuhRZZMEUdtuqy-oLWQq5mghY6BRIW0NxMMrctpxr2vFagE2mg1cZ01Q1UlN0ZU61gAlZzQbeH~wf8ad3W01AkwUhDW62Ub-HDTWBePms1xDhSjWKTQrkUe3J3x2UP5MU038KJEfDRUeuZjxOShuXKmxFDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      price: 1299,
      quantity: 1,
      total: 0,
    },
  ],
  deliveryFee: 0,
  total: 0,
}
export default {
  components: {
    CheckOutTitle,
    ShopCart,
    Footer,
    StepControlOne,
    CheckoutAddress
  },
  data() {
    return {
      products: [],
      deliveryFee: 0,
      total: 0,
    }
  },
  created() {
    this.fetchData()
    this.products = JSON.parse(localStorage.getItem('products') || [])
    this.deliveryFee = JSON.parse(localStorage.getItem('deliveryFee'))
    this.total = JSON.parse(localStorage.getItem('total') || 5298)
    this.products.forEach(product => product.total = product.price * product.quantity)
  },
  methods: {
    fetchData() {
      const { products, deliveryFee, total } = dummyData
      const { price, quantity } = products
      this.products = products,
        this.products.total = price * quantity
      this.deliveryFee = deliveryFee,
        this.total = total
    },
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