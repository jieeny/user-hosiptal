<template>
  <div class="all">
    <div class="top">
      <Header></Header>
    </div>

    <div class="scrollbar">
      <img src="./assets/images/default_carousel_picture.png" alt=""/>
    </div>

    <div class="main">
      <div class="right">
        <div class="right-top">
          <TreatmentProcess></TreatmentProcess>
        </div>
        <div class="right-bottom">
          <div v-show="this.$store.state.active === 0">
            <Department></Department>
          </div>
          <div v-show="this.$store.state.active === 1">
            <MedicalInformation></MedicalInformation>
          </div>
          <div v-show="this.$store.state.active === 2">
            <Fee></Fee>
          </div>
          <div v-show="this.$store.state.active === 3">
            <Communication></Communication>
          </div>
        </div>
      </div>
      <div class="left">
        <HelpCenter></HelpCenter>
      </div>
    </div>

    <div class="bottom">
		  <div class="bottom1">
        网友、医生言论仅代表其个人观点，不代表本站同意其说法，本站不承担由此引起的法律责任
      </div>
		  <div class="bottom2">
        医治云康互联网提供平台支持 版权所有，翻版必究 渝ICP备13001276号-6 渝公网安备 50010502000399
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/header'
import TreatmentProcess from './components/diagnose/treatmentProcess.vue';
import HelpCenter from './components/diagnose/helpCenter.vue';
import Department from './components/diagnose/department.vue';
import Communication from './components/diagnose/communication.vue';
import Fee from './components/diagnose/fee.vue';
import MedicalInformation from './components/diagnose/information.vue'

export default{
  data() {
    return {
      imgs: [
        { path: require("./assets/images/default_carousel_picture.png") },
        { path: require("./assets/images/default_carousel_picture.png") }
      ]
    };
  },
  components: {
    Header,
    TreatmentProcess,
    HelpCenter,
    Department,
    Communication,
    Fee,
    MedicalInformation
  }
}

</script>

<style>
  .scrollbar{
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .main{
    height: 780px;
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    background-color: rgb(238, 238, 238);
    align-items: center;
    justify-content: center;
  }

    

  .right{
    width: 800px;
    height: 730px;
    margin-right: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .left{
    width: 400px;
    height: 730px;
    background: white;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .right-top{
    height: 170px;
    width:100%;
    background: white;
    margin-bottom: 25px;
  }

  .right-bottom{
    height: 535px;
    width: 100%;
    background: white;
  }

  .bottom{
    height: 145px;
    width: 100%;
    background: #e8eff6;
	  flex-shrink: 0;

  }

  .bottom1 {
    display: flex; 
		align-items: center; 
		justify-content: center;
    margin-top: 65px;
    margin-bottom: 30px;
  }

  .bottom2 {
    display: flex; 
		align-items: center; 
		justify-content: center;
  }
</style>


