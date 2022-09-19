<template>
  <div class="container form-container">
    <form action="#" id="a-form">
      <div class="form-content">
        <div class="part ">
          <h2>寄送地址</h2>
          <div class="form-row">
            <div class="form-title">
              <label for="">稱謂</label>
              <div class="select-wrapper">
                <select name="a-type" id="a-type" required>
                  <option value="Mr">先生</option>
                  <option value="Miss">小姐</option>
                  <option value="Mrs">女士</option>
                  <option value="Dr">博士</option>
                </select>
              </div>
            </div>
            <div class="form-name">
              <label for="">姓名</label><br>
              <input type="text" name="name" id="user-Name" placeholder="請輸入姓名" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-phone">
              <label for="">電話</label>
              <input type="text" id="user-phone" placeholder="請輸入行動電話">
            </div>
            <div class="form-email">
              <label for="">Email</label><br>
              <input type="text" name="email" id="user-email" placeholder="請輸入電子郵件" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-city">
              <label for="">縣市</label>
              <div class="select-wrapper">
                <select name="a-type" id="a-type" required>
                  <option value="" disabled selected>請選擇縣市</option>
                  <option value="TPE">台北市</option>
                  <option value="TPH">新北市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">台中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>
            <div class="form-address">
              <label for="">地址</label><br>
              <input type="text" name="adress" id="user-address" placeholder="請輸入地址" />
            </div>
          </div>
        </div>
        <div class="part d-none">
          <h2>運送方式</h2>
          <div class="form-row">
            <div class="delivery-form">
              <div class="delivery delivery-standard">
                <input name="delivery-option" class="delivery-option" type="radio" value="0">
                <div class="delivery-info">
                  <div class="delivery-day">
                    <label for="">標準運送</label>
                    <p>約3~7個工作天</p>
                  </div>
                  <p class="delivery-fee">免費</p>
                </div>
              </div>
              <div class="delivery delivery-Dhl">
                <input name="delivery-option" class="delivery-option" type="radio" value="500">
                <div class="delivery-info">
                  <div class="delivery-day">
                    <label for="">DHL 貨運</label>
                    <p>48 小時內送達</p>
                  </div>
                  <p class="delivery-fee">$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="part d-none">
          <h2>付款資訊</h2>
          <div class="form-row">
            <div class="form-card-name">
              <label for="">持卡人姓名</label>
              <input type="text" name="name" id="card-Name" placeholder="John Doe" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-card-number">
              <label for="">卡號</label>
              <input name="card_Number" class="card-Number" type="text" pattern="\d*" maxlength="16"
                placeholder="1111 2222 3333 4444">
            </div>
          </div>
          <div class="form-row">
            <div class="card-date">
              <label for="">有效期限</label>
              <input type="text" name="card-Date" id="card-Date" placeholder="MM/YY" required />
            </div>
            <div class="card-cvc">
              <label for="">CVC / CCV</label>
              <input type="text" name="card-CVC" id="card-CVC" placeholder="123" required />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/reset.scss';
@import '../assets/scss/form.scss';
</style>