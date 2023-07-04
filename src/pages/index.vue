<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">奶粉辅食</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList" v-bind:key="i">
                                    <li v-for="(sub, j) in item" v-bind:key="j">
                                        <a v-bind:href="sub?'/#/detail/'+sub.id:''">
                                            <img v-bind:src="'/imgs/'+sub.img" alt="">
                                            {{ sub.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">纸尿裤</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuListOne" v-bind:key="i">
                                    <li v-for="(sub, j) in item" v-bind:key="j">
                                        <a v-bind:href="sub?'/#/detail/'+sub.id:''">
                                            <img v-bind:src="'/imgs/'+sub.img" alt="">
                                            {{ sub.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">喂养洗护</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuListTwo" v-bind:key="i">
                                    <li v-for="(sub, j) in item" v-bind:key="j">
                                        <a v-bind:href="sub?'/#/detail/'+sub.id:''">
                                            <img v-bind:src="'/imgs/'+sub.img" alt="">
                                            {{ sub.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">儿童玩具</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">车床座椅</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">童装童鞋</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">妈妈专区</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">关注宝宝</a>
                        </li>
                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/detail/'+item.id"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-boxs">
                <a v-bind:href="'/#/detail/'+item.id" v-for="(item, index) in adsList" v-bind:key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/detail/21">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>婴儿用品</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/detail/11">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in itemList" v-bind:key="i">
                            <div class="item" v-for="(item, j) in arr" v-bind:key="j">
                                <span v-bind:class="{'new-pro': j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="'/imgs/'+item.mainImage" alt="">
                                    
                                </div>
                                <div class="item-info">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.subtitle }}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import ServiceBar from './../components/ServiceBar.vue'
    import Modal from './../components/Modal.vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'index',
        components: {
            swiper,
            swiperSlide,
            ServiceBar,
            Modal
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                slideList: [
                    {
                        id: '1',
                        img: '/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '2',
                        img: '/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '3',
                        img: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '4',
                        img: '/imgs/slider/slide-4.jpg'
                    },
                    {
                        id: '5',
                        img: '/imgs/slider/slide-5.jpg'
                    },
                ],
                menuList: [],
                menuListOne: [],
                menuListTwo: [],
                adsList: [
                    {
                        id: 1,
                        img: '/imgs/ads/ads-1.png'
                    },{
                        id: 21,
                        img: '/imgs/ads/ads-2.jpg'
                    },{
                        id: 5,
                        img: '/imgs/ads/ads-3.png'
                    },{
                        id: 17,
                        img: '/imgs/ads/ads-4.jpg'
                    }
                ],
                itemList: [
                    [1,1,1,1],[1,1,1,1]
                ],
                showModal: false
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                this.axios.get('/products', {
                    params: {
                        categoryId: 100012,
                        pageSize: 14
                    }
                }).then((res)=>{
                    this.itemList = [res.list.slice(0,4), res.list.slice(4,8)]
                }),
                this.axios.get('/getheadertwo', {

                }).then((res)=>{
                    this.menuList = res.list;
                    this.menuListOne = [res.list[1]]
                    this.menuListTwo = res.list.slice(2,4)
                })
            },
            addCart(id) {
                this.axios.post('/carts', {
                    productId: id,
                    selected: true
                }).then((res)=>{
                    this.showModal = true;
                    this.$store.dispatch('saveCartCount',res.cartProductVoList.length);
                }).catch(()=>{
                    this.showModal = true;
                })
            },
            goToCart() {
                this.$router.push('/cart');
            }
        }, 
        filters: {
            currency(val) {
                if (!val) return '0.00';
                return '￥' + val.toFixed(2) + '元';
            }
        },
    }
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .index {
        .swiper-box {
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585A7a;
                box-sizing: border-box;
                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;
                        a {
                            display: block;
                            position: relative;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            &:after {
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: ' ';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                            }
                        }
                        &:hover {
                            background-color: #e4393c;
                            .children {
                                display: block;
                            }
                        }
                        .children {
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul {
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li {
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a {
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img {
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 274px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .ads-boxs {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a {
                width: 296px;
                height: 167px;
            }
        }
        .banner {
            margin-bottom: 50px;
        }
        .product-box {
            background-color: $colorJ;
            padding: 30px 0 50px;
            h2 {
                font-size: $colorF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 20px;
            }
            .wrapper {
                display: flex;
                .banner-left {
                    margin-right: 16px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    .list {
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .item {
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            text-align: center;
                            span {
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                font-size: 14px;
                                line-height: 24px;
                                color: $colorG;
                                &.new-pro {
                                    background-color: #7ECF68;
                                }
                                &.kill-pro {
                                    background-color: #E82626;
                                }
                            }
                            .item-img {
                                img {
                                    height: 195px;
                                    widows: 100%;
                                }
                            }
                            .item-info {
                                h3 {
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height: $fontJ;
                                    font-weight: bold;
                                }
                                p {
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price {
                                    color: #F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after {
                                        content: ' ';
                                        @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>