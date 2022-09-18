<template>
    <el-row type="flex" align="middle" style="height:40px; width: 100%;">
    <el-col>{{ data.name }}</el-col>
    <el-col type="flex" justify="end">
    <span>{{ data.manager }}</span>
    <el-dropdown>
        <span class="el-dropdown-link">
        操作<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <slot></slot>
        </el-dropdown-menu>
    </el-dropdown>
    </el-col>
</el-row>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>
