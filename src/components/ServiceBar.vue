<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>正品保障</li>
                <li><span class="icon-7day"></span>急速物流</li>
                <li><span class="icon-15day"></span>售后无忧</li>
                <li><span class="icon-post"></span>省心购</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'service-bar'
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .service {
        padding: 33px 0;
        color: #666666;
        font-size: 16px;
        li {
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #E5E5E5;
            &:last-child {
                border-right: none;
            }
            span {
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }
            
            .icon-setting {
                @include bgImg(20px, 20px, '/imgs/icon-setting.jpg');
            }
            .icon-7day {
                @include bgImg(20px, 20px, '/imgs/icon-7day.jpg');
            }
            .icon-15day {
                @include bgImg(20px, 20px, '/imgs/icon-15day.jpg');
            }
            .icon-post {
                @include bgImg(20px, 20px, '/imgs/icon-post.png');
            }
        }
    }
    
</style>