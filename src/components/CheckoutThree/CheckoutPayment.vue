<template>
  <div class="container form-container" @submit.stop.prevent="handleSubmit">
    <form action="#" id="a-form">
      <div class="form-content">
        <div class="part">
          <h2>付款資訊</h2>
          <div class="form-row">
            <div class="form-card-name">
              <label for="">持卡人姓名</label>
              <input v-model="paymentInfo.name" type="text" name="name" id="card-Name" placeholder="John Doe"
                required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-card-number">
              <label for="">卡號</label>
              <input name="card_Number" class="card-Number" type="text" pattern="\d*" maxlength="16"
                placeholder="1111 2222 3333 4444" v-model="paymentInfo.cardNUmber">
            </div>
          </div>
          <div class="form-row">
            <div class="card-date">
              <label for="">有效期限</label>
              <input type="text" name="card-Date" id="card-Date" placeholder="MM/YY" maxlength="4"
                v-model="paymentInfo.expireDate" required />
            </div>
            <div class="card-cvc">
              <label for="">CVC / CCV</label>
              <input type="text" name="card-CVC" id="card-CVC" placeholder="123" maxlength="3" v-model="paymentInfo.CVC"
                required />
            </div>
          </div>
        </div>
      </div>
      <div id="btn-control" class="control-panel d-flex justify-content-between">
        <button type="button" class="btn btn-outline" @click.prevent.stop="$router.push('2')">上一步</button>
        <button type="submit" class="btn btn-primary">送出申請</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentInfo: {
        name: '',
        cardNUmber: '',
        expireDate: '',
        CVC: '',
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'))
    },
    handleSubmit(){
      console.log(localStorage.info)
      console.log(localStorage.products)
      console.log('deliveryFee: ',localStorage.deliveryFee)
      console.log(localStorage.paymentInfo)
      console.log('total: ',localStorage.total)
    }
  },
  watch: {
    paymentInfo: {
      handler: function () {
        localStorage.setItem('paymentInfo', JSON.stringify(this.paymentInfo))
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/reset.scss';
@import '../../assets/scss/CheckoutThree/CheckoutFrom.scss';
@import '../../assets/scss/CheckoutThree/buttonControl.scss';
</style>
