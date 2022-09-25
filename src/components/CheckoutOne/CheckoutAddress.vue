<template>
  <div class="container form-container">
    <form id="a-form" @submit.prevent.stop="handleSubmit">
      <div class="form-content">
        <div class="part">
          <h2>寄送地址</h2>
          <div class="form-row">
            <div class="form-title">
              <label for="">稱謂</label>
              <div class="select-wrapper">
                <select v-model="info.title" name="title" id="a-type" required>
                  <option :value="title.value" v-for="title in titles" :key="title.id">{{title.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-name">
              <label for="">姓名</label><br>
              <input v-model=" info.name" type="text" name="name" id="user-Name" placeholder="請輸入姓名" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-phone">
              <label for="">電話</label>
              <input v-model="info.tel" type="tel" id="user-phone" placeholder="請輸入行動電話" required max="15" />
            </div>
            <div class="form-email">
              <label for="">Email</label><br>
              <input v-model="info.email" type="text" name="email" id="user-email" placeholder="請輸入電子郵件"
                required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-city">
              <label for="">縣市</label>
              <div class="select-wrapper">
                <select v-model="info.city" name="city" id="a-type" required>
                  <option disabled selected>請選擇縣市</option>
                  <option v-for="City in Citys" :key="City.id" :value="City.name">{{City.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-address">
              <label for="">地址</label><br>
              <input v-model="info.address" type="text" name="adress" id="user-address" placeholder="請輸入地址"
                required />
            </div>
          </div>
        </div>
      </div>
      <div id="btn-control" class="control-panel">
        <button disabled type="button" class="btn btn-outline hidden">上一步</button>
        <button type="submit" class="btn btn-primary">下一步</button>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
const dummyData = {
  titles: [
    { id: uuidv4(), name: '先生', value: 'Mr' },
    { id: uuidv4(), name: '小姐', value: 'Miss' },
    { id: uuidv4(), name: '女士', value: 'Mrs' },
    { id: uuidv4(), name: '博士', value: 'Dr' }
  ],
  Citys: [
    { id: uuidv4(), name: '台北市', value: 'TPE' },
    { id: uuidv4(), name: '新北市', value: 'TPH' },
    { id: uuidv4(), name: '基隆市', value: 'KLU' },
    { id: uuidv4(), name: '桃園市', value: 'TYC' },
    { id: uuidv4(), name: '新竹縣', value: 'HSH' },
    { id: uuidv4(), name: '苗栗縣', value: 'MAL' },
    { id: uuidv4(), name: '台中市', value: 'TXG' },
    { id: uuidv4(), name: '彰化縣', value: 'CWH' },
    { id: uuidv4(), name: '南投縣', value: 'NTO' },
    { id: uuidv4(), name: '雲林縣', value: 'YLH' },
    { id: uuidv4(), name: '嘉義縣', value: 'CHY' },
    { id: uuidv4(), name: '臺南市', value: 'TNN' },
    { id: uuidv4(), name: '高雄市', value: 'KHH' },
    { id: uuidv4(), name: '屏東縣', value: 'IUH' },
    { id: uuidv4(), name: '宜蘭縣', value: 'ILN' },
    { id: uuidv4(), name: '花蓮縣', value: 'HWA' },
    { id: uuidv4(), name: '臺東縣', value: 'TTT' },
    { id: uuidv4(), name: '澎湖縣', value: 'PEH' },
    { id: uuidv4(), name: '金門縣', value: 'KMN' },
    { id: uuidv4(), name: '連江縣', value: 'LNN' },
  ]
}

export default {
  name: 'CheckoutOne',
  data() {
    return {
        titles: [],
        Citys: [],
        info: {
          title: '',
          name: '',
          tel: '',
          email: '',
          city: '',
          address: '',
        }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const { titles, Citys } = dummyData
      this.titles = titles
      this.Citys = Citys
      this.info = JSON.parse(localStorage.getItem('info')|| [])
    },
    handleSubmit() {
      localStorage.setItem('info',JSON.stringify(this.info))
      this.$router.push('/checkout/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/reset.scss";
@import "../../assets/scss/CheckoutOne/CheckoutForm.scss";
@import "../../assets/scss/CheckoutOne/buttonControl.scss";
</style>