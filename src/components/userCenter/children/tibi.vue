<template>
	<div id="tibi">
		<!--资金管理头部-->
		<div class="friends_header">
			<p class="back" @click="$router.go(-1)">
				<i class="iconfont icon-zuojiantou"></i>
			</p>
			<p class="yao_qing">
				<span>{{$t('tibi.tibi_1')}}</span>
			</p>
			<router-link tag="p" class="shouyi" to="/CurrencyRecord">
				{{$t('tibi.tibi_2')}}
			</router-link>
		</div>
		<p class="borderColor"></p>
		<div class="identity_content">
			<!--充币地址-->
			<ul>
				<li class="">
					<div class="li_box">
						<div>{{$t('tibi.tibi_3')}}</div>
						<input type="text" disabled="true" value="USDT" />
					</div>
				</li>
				<li class="">
					<div class="li_box">
						<div>{{$t('tibi.tibi_4')}}</div>
						<input type="text" v-model="form.phoneNumber">
					</div>
				</li>
				<li>
					<div class="li_box">
						<div>{{$t('tibi.tibi_5')}}<span class="fr">{{$t('tibi.tibi_6')}}   <font class="success">{{uUsdt}}</font></span></div>
						<input type="text" v-model="form.num">
					</div>
				</li>
				<div class="tips">{{$t('tibi.tibi_7')}}</div>
			</ul>
			<div class="submit">
				<button :disabled="saveDis" @click="operaSave()">{{$t('public.submit')}}</button>
			</div>
		</div>

	</div>
</template>

<script>
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import request from "@/public/js/request";
import Public from "@/public/js/public";
import { Toast } from "mint-ui";
export default {
  name: "tibi",
  data() {
    return {
      header: this.$t("tibi.tibi_1"),
      uUsdt: "",
      form: {
        address: "",
        num: ""
      },
      saveDis: false
    };
  },
  mounted() {
    if (!this.$store.state.user.user_id) {
      this.$router.push({ path: "/login" });
    }
  },
  created: function() {
    this.operaGetuUsdt();
  },
  methods: {
    operaGetuUsdt: async function() {
      const res = await fetch.post(utilsApi.apiwithdraw, {
        user_id: this.$store.state.user.user_id
      });
      if (res) {
        this.uUsdt = parseFloat(res.data.data.u_usdt).toFixed(4);
      }
    },
    operaSave: async function() {
      this.form.user_id = this.$store.state.user.user_id;
      const res = await fetch.post(utilsApi.apiwithdrawMoney, this.form);
      if (res.data.code == 20) {
        this.saveDis = true;
        this.operaGetuUsdt();
        var type = store.state.user.type;
        if (type == 2) {
          Toast({
            message: "Please enter the phone number",
            duration: 3000
          });
        } else if (type == 1) {
          Toast({
            message: "请输入手机号码",
            duration: 3000
          });
        } else if (type == 3) {
          Toast({
            message: "핸드폰 번호 입력해주세요.",
            duration: 3000
          });
        } else if (type == 4) {
          Toast({
            message: "Veuillez entrer un numéro de téléphone",
            duration: 3000
          });
        } else if (type == 5) {
          Toast({
            message: "請輸入手機號碼",
            duration: 3000
          });
        } else if (type == 5) {
          Toast({
            message: "携帯番号を入力してください",
            duration: 3000
          });
        }
        this.$router.push({ path: "/CurrencyRecord" });
      } else {
        Toast({
          message: res.data.msg,
          duration: 3000
        });
      }
    }
  }
};
</script>

<style lang="scss">
$submit_color: #373959;
/*登录线条*/

$submit_borderColor: 1px solid #9fa0af;
/*提币*/
.friends_header {
  width: 100%;
  height: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  box-sizing: border-box;
  padding: 0 0.1rem;
  color: #f5ca6c;
  background: url("../../../assets/header_line.png") no-repeat center bottom;
  background-size: 2.815rem;
  .back {
    color: #756846;
  }
  .yao_qing {
    width: 60%;
    text-align: center;
    position: absolute;
    left: 20%;
    font-size: 0.16rem;
    font-weight: bold;
  }
  .shouyi {
    font-size: 0.12rem;
    color: #dca53e;
  }
}
.identity_content {
  width: 2.909rem;
  margin: 0 auto;
  ul {
    li {
      width: 100%;
      line-height: 0.358rem;
      box-sizing: border-box;
      color: #fff;
      padding: 0 0.1rem;
      .li_box {
        width: 100%;
        color: #dca53e;
        input {
          height: 0.358rem;
          line-height: 0.358rem;
          border: 0;
          background: none;
          outline: none;
          color: #fde08d;
          width: 100%;
          border: 1px solid #313330;
          background: url("../../../assets/content_bg.png");
          background-size: 100%;
          padding: 0 0.1rem;
          box-sizing: border-box;
        }
        textarea {
          height: 0.648rem;
          border: 0;
          background: none;
          outline: none;
          width: 100%;
          border: 1px solid #313330;
          background: url("../../../assets/content_bg.png");
          background-size: 100%;
          padding: 0.1rem;
          box-sizing: border-box;
          color: #947130;
        }
        .success {
          color: #72c048;
          font-weight: bold;
        }
      }
    }
    .tips {
      padding: 0.1rem;
      text-align: right;
      color: #954f3d;
    }
  }
}

.submit {
  height: 0.4rem;
  width: 2.46rem;
  margin: 0 auto;
  margin-top: 0.17rem;
  background: url("../../../assets/btn_bg.png") no-repeat;
  background-size: 100%;
  button {
    width: 100%;
    height: 0.38rem;
    font-size: 0.19rem;
    color: #734416;
    outline: none;
  }
}
</style>


// WEBPACK FOOTER //
// src/components/userCenter/children/tibi.vue