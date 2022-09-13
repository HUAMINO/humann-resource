<template>
  <div>
    <!-- 使用数据方式1-通过$store -->
    <div>count={{ $store.state.count }}</div>
    <!-- 使用数据方式2-通过计算属性简化模板 -->
    <div>count={{ count }}</div>

    <!-- 调用mutations方式1-通过$store -->
    <button @click="$store.commit('add')">+1</button>
    <!-- 调用mutations方式2-通过映射 -->
    <button @click="add">+1</button>
    <!-- 调用mutations传参 -->
    <button @click="$store.commit('addN', 3)">+N</button>
    <button @click="addN(3)">+N</button>

    <!-- 调用actions方式1-通过$store -->
    <button @click="$store.dispatch('addSync')">+1 async</button>
    <!-- 调用actions方式2-通过映射 -->
    <button @click="addSync">+1 async</button>
    <!-- 调用actions传参 -->
    <button @click="$store.dispatch('addNSync', 5)">+N async</button>
    <button @click="addNSync(5)">+N async</button>

    <!-- 调用getters,方式1-通过$store -->
    <div>{{ $store.getters.showCount }}</div>
    <!-- 调用getters,方式2-通过映射 -->
    <div>{{ showCount }}</div>

    <!-- 使用模块当中数据 -->
    <!-- $store.state.模块名.数据名 -->
    <div>token={{ $store.state.test.token }}</div>
    <!-- 方法默认不用加模块名,会有问题,默认会调到所有没有加namespaced的模块的setToken -->
    <!-- <button @click="$store.commit('setToken', 'abc')">setToken</button> -->
    <!-- 默认不支持模块名调用方法,需要加配置 -->
    <button @click="$store.commit('test/setToken', 'abc')">setToken</button>

    <!-- 测试图标 -->
    <svg-icon icon-class="eye" class-name="color-red"></svg-icon>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default {
  name: '',
  components: {
    SvgIcon
  },
  props: {
  },
  data() {
    return {

    }
  },
  computed: {
    // 通过映射方式批量生成计算属性
    ...mapState(['count', 'age']),
    ...mapGetters(['showCount'])
    /*
    count() {
      return this.$store.state.count
    }
    */
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['add', 'addN']),
    ...mapActions(['addSync', 'addNSync'])
  }
}
</script>

<style lang="scss" scoped>
.color-red {
  color: red;
}
</style>
