<template>
  <h2 class="checkout-title">結帳</h2>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/reset.scss';

.checkout-title {
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 375px) {
  .checkout-title {
    font-size: 2rem;
    width: 80%;
    margin: 80px auto 48px auto;
  }
}
</style>