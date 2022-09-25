<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container">
      <div class="step checked">
        <div class="circle-container"></div>
        <h2 class="step-title">寄送地址</h2>
        <div class="connect-line"></div>
      </div>
      <div class="step active">
        <div class="circle-container"></div>
        <h2 class="step-title">運送方式</h2>
      </div>
      <div class="step ">
        <div class="connect-line"></div>
        <div class="circle-container"></div>
        <h2 class="step-title">付款資訊</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/CheckoutStyle/stepControl.scss';
</style>