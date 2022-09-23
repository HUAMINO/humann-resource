<template>
  <div>
    <upload-excel :on-success="handleSuccess"></upload-excel>
  </div>
</template>
<script>
import { importEmployee } from '@/api/employees'

export default {
  name: 'Import',
  methods: {
    async handleSuccess({ results }) {
      const userRelations = {
        '入职日期': 'timeOfEntry',
        '手机号': 'mobile',
        '姓名': 'username',
        '转正日期': 'correctionTime',
        '工号': 'workNumber'
      }
      const data = results.map(t => {
        const item = {}
        for (const k in t) {
          item[userRelations[k]] = t[k]
        }
        return item
      })
      await importEmployee(data)
      this.$message.success('操作陈宫')
    }
  }
}
</script>
