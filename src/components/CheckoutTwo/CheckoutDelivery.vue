<template>
  <div class="container form-container" @submit.prevent.stop="handleSubmit">
    <form action="#" id="a-form">
      <div class="form-content">
        <div class="part">
          <h2>運送方式</h2>
          <div class="form-row">
            <div class="delivery-form">
              <div class="delivery delivery-standard">
                <input name="delivery-option" class="delivery-option" id="standard"  type="radio" value="0" v-model="deliveryFee">
                <div class="delivery-info">
                  <div class="delivery-day">
                    <h4>標準運送</h4>
                    <p>約3~7個工作天</p>
                  </div>
                  <label for="standard" class="delivery-fee">免費</label>
                </div>
              </div>
              <div class="delivery delivery-Dhl">
                <input name="delivery-option" class="delivery-option" id="DHL" type="radio" value="500" v-model="deliveryFee">
                <div class="delivery-info">
                  <div class="delivery-day">
                    <h4 for="">DHL 貨運</h4>
                    <p>48 小時內送達</p>
                  </div>
                  <label class="delivery-fee" for="DHL">$500</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="btn-control" class="control-panel d-flex justify-content-between">
        <button type="button" class="btn btn-outline"><router-link to="/checkout/1">上一步</router-link></button>
        <button type="submit" class="btn btn-primary">下一步</button>
      </div>
    </form>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
 name: 'CheckoutDelivery',
 props: {
  initFee: {
    value: [Number, String],
    required: true
  }
 },
 data(){
  return{
    deliveryFee: '0'
  }
 },
 created(){
  this.fetchData()
 },
 methods: {
  fetchData(){
    this.deliveryFee = this.initFee
  },
  sendFee(){
    let fee = this.deliveryFee
    localStorage.setItem('deliveryFee',JSON.stringify(fee))
    PubSub.publish('deliveryFee', fee)
  },
  async handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      await this.$emit('after-delivery-submit', formData)
      this.$router.push('/checkout/3')
    }
 },
 watch:{
  deliveryFee:{
    handler: function(){
      this.sendFee()
    },
    deep: true
  }
 }

}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/reset.scss';
@import '../../assets/scss/CheckoutTwo/CheckoutFrom.scss';
@import '../../assets/scss/CheckoutStyle/buttonControl.scss';
</style>
