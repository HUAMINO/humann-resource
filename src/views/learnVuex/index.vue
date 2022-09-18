<template>
  <div>
    <!-- 使用数据方式1 通过$store -->
    <div>count={{ $store.state.count }}</div>
    <!-- 使用数据方式2, 通过计算属性简化版 ...mapState-->
    <div>count={{ count }}</div>
    <div>count={{ age }}</div>
    <!-- 调用mutation -->
    <button @click="$store.commit('add')">点击count加1</button>
    <button @click="addAge">点击age加1</button>
    <!-- 调用mutation  传参-->
    <button @click="$store.commit('addN',3)">点击count加n</button>
    <button @click="addN(3)">点击age加n</button>
    <!-- 使用actions方式1 通过$store -->
    <button @click="$store.dispatch('addSync')">等一等再加</button>
    <!-- 使用actions方式1 通过映射 -->
    <button @click="addSync">等一等再加</button>

    <!-- 使用actions方式1 通过$store  传参  -->
    <button @click="$store.dispatch('addNSync',6)">等一等再加6</button>
    <!-- 使用actions方式1 通过映射   传参 -->
    <button @click="addNSync(6)">等一等再加6</button>

    <!-- 使用getters方式1 通过$store  传参  -->
    <div>{{ $store.getters.showCount }}</div>
    <!-- 使用数据方式2, 通过计算属性简化版 ...mapGetters -->
    <div>{{ showCount }}</div>
    <br>
    <!--  使用模块中的数据 -->
    <div>token={{ $store.state.test.token }} </div>
    <!-- 方法默认不加模块名,会有问题 默认会调到所有没有加namespace的模块SetToken -->
    <!-- 默认不支持模块名调用方法,需要配置 -->
    <button @click="$store.commit('test/setToken',123)">点击添加token</button>

    <!-- 测试使用icon图标 -->
    <svg-icon icon-class="eye" class-name="color-red"></svg-icon>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: '',
  components: {},
  props: {
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['count', 'age']),
    ...mapGetters(['showCount'])

  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['addAge', 'addN']),
    ...mapActions(['addSync', 'addNSync'])
  }
}
</script>

<style  scoped>
.color-red{
  color: red;
}
</style>
