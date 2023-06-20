<template>
    <div class="footer">
        <div class="footer-logo">
            <!-- <img src="/imgs/logo.png" alt=""> -->
            <p></p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">购物指南</a><span>|</span>
            <a href="" target="_blank">物流配送</a><span>|</span>
            <a href="" target="_blank">售后服务</a><span>|</span>
            <a href="" target="_blank">商家服务</a>
        </div>
        <div class="copyright">本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）<span class="domain"></span></div>
    </div>
</template>

<script>
    export default {
        name: 'nav-footer'
    }
</script>

<style lang="scss" scoped>
    .footer {
        height: 234px;
        border-top: 4px solid #F5F5F5;
        background-color: #F5F5F5;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright {
            .domain {
                color: #FF6600;
            }
        }
    }
</style>