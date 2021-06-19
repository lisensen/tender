<template>
    <div class="hello">
        <h2>{{ '投标人信息登记' }}</h2>

        <van-form @submit="onSubmit">
            <!-- 姓名 -->
            <van-field left-icon="user-o" v-model="userName"  name="userName" label="姓名" placeholder="请输入姓名" :rules="[{ required: true}]" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field left-icon="phone-o" v-model="phone" name="phone" type="tel" label="手机号" placeholder="请输入手机号码" :rules="[{ required: true}]" />
            <!-- 身份证号码 -->
            <van-field left-icon="idcard" v-model="idCard" name="idCard" label="身份证号" placeholder="请输入身份证号" :rules="[{ required: true}]" />
            <!-- 投标单号 -->
            <van-field left-icon="records" v-model="tenderNo" name="tenderNo" label="投标单号" placeholder="请输入投标单号" :rules="[{ required: false}]" />

            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>

        </van-form>

    </div>
</template>

<script>
    import Vue from 'vue';
    // import Vant from 'vant';
    import { Toast,Form,Button,Field,Icon } from 'vant';
    // import { Notify } from 'vant';
    import router from '../../router'
    // Vue.use(Vant);
    Vue.use(Toast);
    Vue.use(Form);
    Vue.use(Button);
    Vue.use(Field);
    Vue.use(Icon);
    // Vue.use(Notify);

    export default {
        name: 'HelloWorld',
        data() {
            return {
                userName: '',
                phone: '',
                idCard:'',
                tenderNo:''
            };
        },
        methods: {
            onSubmit(values) {
                // // 主要通知
                // Notify({ type: 'primary', message: '通知内容' });
                // loading
                const load = Toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: "加载中..."
                });
                console.log('submit', values);
                this.$axios.post('/admin/openApi/tender',values)
                    .then(function(res){
                        load.clear();
                        console.log(res);
                        router.replace({
                            path: '/success'
                        })
                    })
                    .catch(function(err){
                        load.clear();
                        console.log(err);
                    });
            },
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
