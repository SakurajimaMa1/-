<template>
    <div class="detail">
      <product-param v-bind:title="product.name"></product-param>
      <div class="wrapper">
        <div class="container clearfix">
          <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide><img v-bind:src="'/imgs/'+product.mainImage" alt=""></swiper-slide>
                <!-- <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide> -->
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
          <div class="content">
            <h2 class="item-title">{{product.name}}</h2>
            <!-- <p class="item-info"></p> -->
            <div class="delivery">官方自营</div>
            <div class="item-price">{{product.price}}元<span class="del">399元</span></div>
            <div class="line"></div>
            <div class="item-addr">
              <i class="icon-loc"></i>
              <div class="addr">北京 北京市 朝阳区 安定门街道</div>
              <div class="stock">包邮</div>
            </div>
            <div class="item-version clearfix">
              <h2>规格</h2>
              <div class="phone fl" :class="{'checked':version==1}" @click="version=1">一个装</div>
              <div class="phone fr" :class="{'checked':version==2}" @click="version=2">两个装</div>
            </div>
            <div class="item-color">
              <h2>数量</h2>
              <!-- <div class="phone checked">
                <span class="color"></span>
                深空灰
              </div> -->
              <div class="num-box">
                <a href="javascript:;" @click="updateCart('-')">-</a>
                <span>{{ quantity }}</span>
                <a href="javascript:;" @click="updateCart('+')">+</a>
              </div>
            </div>
            <div class="item-total">
              <div class="phone-info clearfix">
                <div class="fl">{{product.name}}</div>
                <div class="fr">{{product.price}}元</div>
              </div>
              <div class="phone-total">总计：{{product.price * quantity}}元</div>
            </div>
            <div class="btn-group">
              <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
            </div>
          </div>
        </div>
    </div>
    <div class="price-info">
        <div class="container">
          <h2>价格说明</h2>
          <div class="desc">
            <img src="/imgs/detail/item-price.jpeg" alt="">
          </div>
        </div>
    </div>
      <service-bar></service-bar>
      <modal 
            title="提示" 
            sureText="查看购物车" 
            btnType="1" 
            modalType="middle" 
            v-bind:showModal="showModal"
            v-on:submit="goToCart"
            v-on:cancel="showModal=false"
            >
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import ProductParam from './../components/ProductParam'
  import Modal from './../components/Modal.vue'
  import ServiceBar from './../components/ServiceBar';
  export default{
    name:'detail',
    data(){
      return {
        id:this.$route.params.id,//获取商品ID
        err:'',
        version:1,//商品版本切换
        product:{},//商品信息
        swiperOption:{
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        },
        quantity: 1,
        showModal: false
      }
    },
    components:{
      swiper,
      swiperSlide,
      ProductParam,
      ServiceBar,
      Modal
    },
    mounted(){
      this.getProductInfo();
    },
    methods:{
      getProductInfo(){
        this.axios.get(`/products/${this.id}`).then((res)=>{
          this.product = res;
        })
      },
      addCart(){
        this.axios.post('/itemcarts',{
          productId:this.id,
          selected: true,
          quantity: this.quantity
        }).then((res={cartProductVoList:0})=>{
            console.log(res);
            this.$store.dispatch('saveCartCount',res.cartProductVoList.length);
            this.showModal = true;
        //   this.$router.push('/cart');
        });
      },
      updateCart(type) {
        if(type == '-'){
            if(this.quantity == 1){
              return;
            }
            --this.quantity;
        }else if(type == '+') {
          ++this.quantity;
        }
      },
      goToCart() {
        this.$router.push('/cart');
      }
    }
  }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .detail{
      .wrapper{
        .swiper{
          float:left;
          width:642px;
          height:617px;
          margin-top:45px;
          img{
            width:540px;
            height:517px;
            // width: 100%;
            // height: 100%;
          }
        }
        .content{
          float:right;
          width:584px;
          height:870px;
          .item-title{
            font-size:28px;
            padding-top:30px;
            padding-bottom:16px;
            height: 26px;
          }
          // .item-info{
          //   font-size:14px;
          //   height: 36px;
          // }
          .delivery{
            font-size:16px;
            color:#e4393c;
            margin-top:26px;
            margin-bottom:14px;
            height: 15px;
          }
          .item-price{
            font-size:20px;
            color:#e4393c;
            height: 19px;
            .del{
              font-size:16px;
              color:#999999;
              margin-left:10px;
              text-decoration:line-through;
            }
          }
          .line{
            height:0;
            margin-top:25px;
            margin-bottom:28px;
            border-top:1px solid #E5E5E5;
          }
          .item-addr{
            height:108px;
            background-color:#FAFAFA;
            border:1px solid #E5E5E5;
            box-sizing:border-box;
            padding-top:31px;
            padding-left:64px;
            font-size:14px;
            line-height:14px;
            position:relative;
            .icon-loc{
              position: absolute;
              top: 27px;
              left: 34px;
              @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
            }
            .addr{
              color:#666666;
            }
            .stock{
              margin-top:15px;
              color:#e4393c;
            }
          }
          .item-version,.item-color{
            margin-top:30px;
            h2{
              font-size:18px;
              margin-bottom:20px;
            }
          }
          .item-version,.item-color{
            .phone{
              width:287px;
              height:50px;
              line-height:50px;
              font-size:16px;
              color:#333333;
              border:1px solid #E5E5E5;
              box-sizing: border-box;
              text-align:center;
              cursor:pointer;
              span{
                color:#666666;
                margin-left:15px;
              }
              .color{
                display:inline-block;
                width:14px;
                height:14px;
                background-color:#666666;
              }
              &.checked{
                border:1px solid #e4393c;
                color:#e4393c;
              }
            }
          }
          .item-color {
            .num-box {
              width:150px;
              height:40px;
              line-height:40px;
              font-size:14px;
              border:1px solid #E5E5E5;
              a{
                display:inline-block;
                width:50px;
                color:#333333;
                text-align: center;
              }
              span{
                display:inline-block;
                width:50px;
                text-align: center;
                color:#333333;
              }
            }
          }
          .item-total{
            height: 108px;
            background: #FAFAFA;
            padding: 24px 33px 29px 30px;
            font-size: 14px;
            margin-top:50px;
            margin-bottom:30px;
            box-sizing: border-box;
            .phone-total{
              font-size: 24px;
              color: #e4393c;
              margin-top: 18px;
            }
          }
        }
      }
      .price-info{
        background-color:#F3F3F3;
        height:340px;
        h2{
          font-size:24px;
          color:#333333;
          padding-top:38px;
          margin-bottom:30px;
        }
      }
    }
</style>