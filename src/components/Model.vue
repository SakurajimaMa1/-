<template>
    <div class="model" v-show="showModel">
        <div class="mask"></div>
        <div class="model-dialog">
            <div class="model-header">
                <span>标题</span>
                <a href="javascript:;" class="icon-close"></a>
            </div>
            <div class="model-body">
                <slot name="body"></slot>
            </div>
            <div class="model-footer">
                <a href="javascript:;" class="btn">确定</a>
                <a href="javascript:;" class="btn">取消</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'model',
        props: {
            // 弹框类型： 小small 中middle 大large 表单form
            modelType: {
                type: String,
                default: 'form'
            },
            // 弹框标题
            title: String,
            // 按钮类型： 1：确定按钮 2：取消按钮 3:确定和取消按钮
            btnType: String,
            sureText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            showModel: Boolean
        }
    }
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/model.scss';
</style>